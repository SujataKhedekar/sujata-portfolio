"use client";

import { useEffect } from "react";
import { animate, inView, scroll } from "motion";
import { shot, hostOf } from "@/lib/shot";

export default function Interactions() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Collect teardown callbacks (important for React strict-mode double mount).
    const cleanups = [];
    const onWin = (type, fn, opts) => {
      window.addEventListener(type, fn, opts);
      cleanups.push(() => window.removeEventListener(type, fn, opts));
    };

    /* 2. Fade-in staggered reveals */
    document.querySelectorAll("[data-fade]").forEach((el) => {
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      const y = parseFloat(el.getAttribute("data-y") || "0");
      const x = parseFloat(el.getAttribute("data-x") || "0");
      const duration = parseFloat(el.getAttribute("data-duration") || "0.7");
      if (reduceMotion) {
        el.style.opacity = "1";
        return;
      }
      el.style.opacity = "0";
      el.style.transform = `translate(${x}px, ${y}px)`;
      const stop = inView(
        el,
        () => {
          animate(
            el,
            { opacity: [0, 1], transform: [`translate(${x}px, ${y}px)`, "translate(0px, 0px)"] },
            { duration, delay, easing: [0.25, 0.1, 0.25, 1] }
          );
        },
        { amount: 0.1 }
      );
      cleanups.push(stop);
    });

    /* 3. Hero portrait magnet */
    const magnetWrapper = document.getElementById("magnet-wrapper");
    if (magnetWrapper && finePointer) {
      const magnetItem = magnetWrapper.querySelector(".hero-portrait");
      const padding = 150,
        strength = 3;
      const onMove = (e) => {
        const rect = magnetWrapper.getBoundingClientRect();
        const cx = rect.left + rect.width / 2,
          cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx,
          dy = e.clientY - cy;
        if (Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding) {
          magnetItem.style.transition = "transform 0.3s ease-out";
          magnetItem.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
        } else {
          magnetItem.style.transition = "transform 0.6s ease-in-out";
          magnetItem.style.transform = "translate3d(0,0,0)";
        }
      };
      onWin("mousemove", onMove);
    }

    /* 4. About char-reveal text */
    const animatedText = document.getElementById("animated-text");
    if (animatedText && !reduceMotion) {
      const chars = animatedText.querySelectorAll(".char-reveal");
      const stop = scroll(
        (progress) => {
          chars.forEach((char, i) => {
            const start = i / chars.length;
            const end = (i + 1) / chars.length;
            let p = (progress - start) / (end - start);
            p = Math.max(0, Math.min(1, p));
            char.style.opacity = 0.55 + p * 0.45;
          });
        },
        { target: animatedText, offset: ["start 0.9", "end 0.6"] }
      );
      cleanups.push(stop);
    }

    /* 5. Projects sticky stack */
    const projectCards = document.querySelectorAll(".project-card");
    const projectsContainer = document.getElementById("projects-container");
    if (projectCards.length && projectsContainer && !reduceMotion) {
      const starts = Array.from(projectCards).map((c) => c.offsetTop);
      const onScroll = () => {
        const containerTop = projectsContainer.getBoundingClientRect().top;
        projectCards.forEach((card, index) => {
          const stickyTop = 96 + index * 28;
          card.style.top = `${stickyTop}px`;
          const targetScale = 1 - (projectCards.length - 1 - index) * 0.03;
          const passed = stickyTop - (containerTop + starts[index]);
          if (passed > 0) {
            const p = Math.max(0, Math.min(1, passed / window.innerHeight));
            card.style.transform = `scale(${1 - (1 - targetScale) * p})`;
          } else {
            card.style.transform = "scale(1)";
          }
        });
      };
      onWin("scroll", onScroll, { passive: true });
      onWin("resize", onScroll);
      onScroll();
    }

    /* 5b. Stats count-up */
    document.querySelectorAll(".stat-num").forEach((el) => {
      const target = parseInt(el.dataset.count || "0", 10);
      if (reduceMotion) {
        el.textContent = target;
        return;
      }
      const stop = inView(
        el,
        () => {
          animate(0, target, {
            duration: 1.6,
            easing: [0.16, 1, 0.3, 1],
            onUpdate: (v) => {
              el.textContent = Math.round(v).toString();
            },
          });
        },
        { amount: 0.6 }
      );
      cleanups.push(stop);
    });

    /* 6. Footer — local time */
    const localTimeEl = document.getElementById("local-time");
    if (localTimeEl) {
      const render = () => {
        const t = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        localTimeEl.textContent = `${t} IST`;
      };
      render();
      const id = setInterval(render, 1000);
      cleanups.push(() => clearInterval(id));
    }

    /* 6b. Copy email */
    const copyEmailBtn = document.getElementById("copy-email");
    if (copyEmailBtn) {
      const labelEl = copyEmailBtn.querySelector(".copy-label");
      const def = labelEl ? labelEl.textContent : "Copy";
      const onClick = async () => {
        const email = copyEmailBtn.dataset.email;
        try {
          await navigator.clipboard.writeText(email);
        } catch {
          const tmp = document.createElement("textarea");
          tmp.value = email;
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand("copy");
          document.body.removeChild(tmp);
        }
        if (labelEl) {
          labelEl.textContent = "Copied!";
          copyEmailBtn.classList.add("is-copied");
          setTimeout(() => {
            labelEl.textContent = def;
            copyEmailBtn.classList.remove("is-copied");
          }, 1800);
        }
      };
      copyEmailBtn.addEventListener("click", onClick);
      cleanups.push(() => copyEmailBtn.removeEventListener("click", onClick));
    }

    /* 6c. Back to top */
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
      backToTopBtn.addEventListener("click", onClick);
      cleanups.push(() => backToTopBtn.removeEventListener("click", onClick));
    }

    /* 7a. Scroll progress bar */
    const progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";
    document.body.appendChild(progressBar);
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    onWin("scroll", updateProgress, { passive: true });
    onWin("resize", updateProgress);
    updateProgress();
    cleanups.push(() => progressBar.remove());

    /* 7b. Custom cursor */
    if (finePointer) {
      const ring = document.createElement("div");
      ring.id = "cursor-ring";
      const dot = document.createElement("div");
      dot.id = "cursor-dot";
      document.body.append(ring, dot);
      document.body.classList.add("has-custom-cursor");

      let mx = innerWidth / 2,
        my = innerHeight / 2,
        rx = mx,
        ry = my,
        raf = 0;
      const onMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      };
      onWin("mousemove", onMove);
      const renderCursor = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        raf = requestAnimationFrame(renderCursor);
      };
      renderCursor();
      const onDown = () => document.body.classList.add("cursor-down");
      const onUp = () => document.body.classList.remove("cursor-down");
      onWin("mousedown", onDown);
      onWin("mouseup", onUp);

      const targets =
        "a, button, .marquee-card, .tech-pill, .archive-row, .service-card, .stat-tile, .project-card, .word-shot, .about-decor";
      const hoverEls = Array.from(document.querySelectorAll(targets));
      const enter = () => document.body.classList.add("cursor-hover");
      const leave = () => document.body.classList.remove("cursor-hover");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        ring.remove();
        dot.remove();
        document.body.classList.remove("has-custom-cursor", "cursor-down", "cursor-hover");
        hoverEls.forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    /* 7c. Magnetic buttons */
    if (finePointer && !reduceMotion) {
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        const text = el.querySelector("[data-magnetic-text]");
        const strength = 0.35;
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
          if (text) text.style.transform = `translate(${dx * strength * 0.4}px, ${dy * strength * 0.4}px)`;
        };
        const onLeave = () => {
          el.style.transition = "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)";
          el.style.transform = "translate(0,0)";
          if (text) text.style.transform = "translate(0,0)";
          setTimeout(() => {
            el.style.transition = "";
          }, 500);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* 7d. 3D tilt on cards */
    if (finePointer && !reduceMotion) {
      document.querySelectorAll("[data-tilt]").forEach((el) => {
        const accent = el.dataset.accent;
        if (accent) el.style.setProperty("--accent", accent);
        const max = 7;
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-6px)`;
        };
        const onLeave = () => {
          el.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
          el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
          setTimeout(() => {
            el.style.transition = "";
          }, 600);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* 7d2. Spotlight position vars */
    if (finePointer) {
      document.querySelectorAll("[data-spotlight]").forEach((el) => {
        const accent = el.dataset.accent;
        if (accent) el.style.setProperty("--accent", accent);
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        el.addEventListener("mousemove", onMove);
        cleanups.push(() => el.removeEventListener("mousemove", onMove));
      });
    }

    /* 7e. About floating cards — mouse parallax */
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    if (finePointer && parallaxEls.length && !reduceMotion) {
      const onMove = (e) => {
        const dx = e.clientX - innerWidth / 2;
        const dy = e.clientY - innerHeight / 2;
        parallaxEls.forEach((el) => {
          const d = parseFloat(el.dataset.parallax || "0.05");
          el.style.transform = `translate(${dx * d}px, ${dy * d}px)`;
        });
      };
      onWin("mousemove", onMove);
    }

    /* 7f. Archive hover-preview thumbnail */
    const preview = document.getElementById("archive-preview");
    if (preview && finePointer) {
      let loadedFor = null;
      let visible = false;
      const showFor = (site) => {
        if (loadedFor !== site) {
          preview.innerHTML = "";
          const img = new Image();
          img.alt = "Live site preview";
          img.decoding = "async";
          img.draggable = false;
          img.style.cssText = "width:100%;height:100%;object-fit:cover;object-position:top center";
          img.onerror = () => {
            preview.style.background = "linear-gradient(135deg,#023047,#06141d)";
            preview.innerHTML = "";
            const tag = document.createElement("span");
            tag.textContent = hostOf(site);
            tag.style.cssText =
              "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7);font-weight:700;text-transform:uppercase;font-size:13px";
            preview.appendChild(tag);
          };
          img.src = shot(site);
          preview.appendChild(img);
          loadedFor = site;
        }
      };
      const rows = Array.from(document.querySelectorAll(".archive-row[data-site]"));
      const handlers = rows.map((row) => {
        const enter = () => {
          showFor(row.dataset.site);
          visible = true;
          preview.classList.add("is-visible");
        };
        const leave = () => {
          visible = false;
          preview.classList.remove("is-visible");
        };
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);
        return { row, enter, leave };
      });
      const onMove = (e) => {
        if (!visible) return;
        preview.style.left = `${e.clientX + 30}px`;
        preview.style.top = `${e.clientY}px`;
      };
      onWin("mousemove", onMove);
      cleanups.push(() =>
        handlers.forEach(({ row, enter, leave }) => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", leave);
        })
      );
    }

    /* 7g. Section progress rail — scroll spy + smooth scroll */
    const rail = document.getElementById("section-rail");
    if (rail) {
      const links = Array.from(rail.querySelectorAll("a"));
      const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
      const linkHandlers = links.map((a) => {
        const onClick = (e) => {
          const target = document.querySelector(a.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        };
        a.addEventListener("click", onClick);
        return { a, onClick };
      });
      const spy = () => {
        const mid = window.scrollY + innerHeight / 2;
        let activeIdx = 0;
        sections.forEach((sec, i) => {
          if (sec.offsetTop <= mid) activeIdx = i;
        });
        links.forEach((a, i) => a.classList.toggle("active", i === activeIdx));
      };
      onWin("scroll", spy, { passive: true });
      spy();
      cleanups.push(() => linkHandlers.forEach(({ a, onClick }) => a.removeEventListener("click", onClick)));
    }

    /* 7h. Smooth-scroll for in-page nav links */
    const navLinks = Array.from(document.querySelectorAll('a[data-link][href^="#"]'));
    const navHandlers = navLinks.map((a) => {
      const onClick = (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
      a.addEventListener("click", onClick);
      return { a, onClick };
    });
    cleanups.push(() => navHandlers.forEach(({ a, onClick }) => a.removeEventListener("click", onClick)));

    return () => cleanups.forEach((fn) => fn && fn());
  }, []);

  return null;
}
