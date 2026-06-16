"use client";

import { useEffect, useRef } from "react";
import Shot from "@/components/Shot";
import { marqueeProjects } from "@/lib/data";

const mid = Math.ceil(marqueeProjects.length / 2);
const rows = [marqueeProjects.slice(0, mid), marqueeProjects.slice(mid)];

function MarqueeTrack({ items, dir }) {
  const trackRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const row = rowRef.current;
    if (!track || !row) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let offset = dir < 0 ? -1 : 0;
    const baseSpeed = 0.4 * dir;
    let dragging = false,
      paused = false,
      startX = 0,
      startOffset = 0,
      moved = 0,
      velocity = 0,
      lastX = 0,
      loopWidth = 0,
      raf = 0;

    const measure = () => {
      loopWidth = row.scrollWidth / 3;
    };
    measure();
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);

    const wrap = () => {
      if (!loopWidth) return;
      if (offset <= -loopWidth) offset += loopWidth;
      if (offset > 0) offset -= loopWidth;
    };

    const tick = () => {
      if (!dragging) {
        if (!paused) offset += baseSpeed;
        if (Math.abs(velocity) > 0.1) {
          offset += velocity;
          velocity *= 0.92;
        }
      }
      wrap();
      row.style.transform = `translate3d(${offset}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    if (!reduceMotion) raf = requestAnimationFrame(tick);
    else row.style.transform = `translate3d(${dir < 0 ? -loopWidth : 0}px,0,0)`;

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    if (finePointer) {
      track.addEventListener("mouseenter", onEnter);
      track.addEventListener("mouseleave", onLeave);
    }

    const down = (x) => {
      dragging = true;
      track.classList.add("dragging");
      startX = x;
      lastX = x;
      startOffset = offset;
      moved = 0;
      velocity = 0;
    };
    const move = (x) => {
      if (!dragging) return;
      const dx = x - startX;
      offset = startOffset + dx;
      velocity = x - lastX;
      lastX = x;
      moved = Math.abs(dx);
    };
    const up = () => {
      dragging = false;
      track.classList.remove("dragging");
    };

    const onMouseDown = (e) => {
      e.preventDefault();
      down(e.clientX);
    };
    const onMouseMove = (e) => move(e.clientX);
    const onTouchStart = (e) => down(e.touches[0].clientX);
    const onTouchMove = (e) => move(e.touches[0].clientX);
    const onClickCapture = (e) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", up);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", up);
    track.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", up);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", up);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, [dir]);

  // Triple the list so the loop is seamless.
  const tripled = [...items, ...items, ...items];

  return (
    <div className="marquee-track" ref={trackRef} data-marquee data-dir={dir}>
      <div className="marquee-row flex w-max gap-4 will-change-transform" ref={rowRef}>
        {tripled.map(([url, label], i) => (
          <Shot
            key={`${url}-${i}`}
            as="a"
            className="marquee-card"
            site={url}
            alt={label}
            href={url}
            target="_blank"
            rel="noopener"
            data-no-drag-click=""
          >
            <span className="marquee-card__label">{label}</span>
          </Shot>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="marquee"
      className="pt-12 sm:pt-28 md:pt-32 pb-14 sm:pb-36 overflow-hidden w-full bg-deepspace relative z-20 flex flex-col gap-4 sm:gap-5 border-y border-white/5"
    >
      <div
        className="px-5 sm:px-6 md:px-10 mb-2 flex items-center justify-between max-w-7xl mx-auto w-full"
        data-fade="true"
        data-y="20"
      >
        <span className="text-sky/80 font-bold uppercase tracking-[0.3em] text-[11px] sm:text-xs flex items-center gap-3">
          <span className="w-8 h-px bg-sky/40" />
          Shipped &amp; Live
        </span>
        <span className="text-sky/40 font-medium uppercase tracking-[0.25em] text-[10px] sm:text-xs hidden sm:block">
          Drag to explore &nbsp;&larr;&rarr;
        </span>
      </div>
      <MarqueeTrack items={rows[0]} dir={1} />
      <MarqueeTrack items={rows[1]} dir={-1} />
    </section>
  );
}
