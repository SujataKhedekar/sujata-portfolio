import { ArrowRight } from "lucide-react";
import Shot from "@/components/Shot";
import { aboutDecor, aboutWordShots, aboutParagraph, EMAIL } from "@/lib/data";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-16 sm:py-24 w-full z-20 bg-amber flex-col gap-8 sm:gap-14 md:gap-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />
      <div className="absolute top-[10%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[170px] bg-green/10 pointer-events-none z-0 mix-blend-screen opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[60vw] rounded-full blur-[150px] bg-sky/20 pointer-events-none z-0 mix-blend-screen opacity-50" />

      {/* Floating real project cards */}
      {aboutDecor.map((d) => (
        <Shot
          key={d.pos}
          className={`about-decor about-decor--${d.pos}`}
          site={d.site}
          alt={d.label}
          data-parallax={d.parallax}
          data-label={d.label}
        />
      ))}

      <div className="flex items-center gap-3 relative z-10" data-fade="true" data-y="20">
        <span className="w-8 h-px bg-deepspace/40" />
        <p className="text-deepspace font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">Who I Am</p>
        <span className="w-8 h-px bg-deepspace/40" />
      </div>

      <h2
        className="text-deepspace font-black uppercase leading-[0.95] tracking-tight text-[clamp(2.5rem,10vw,140px)] relative z-10 max-w-6xl flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6 text-center"
        data-fade="true"
        data-delay="0"
        data-y="40"
      >
        <span>I</span>
        <Shot as="span" className="word-shot" site={aboutWordShots[0]} alt="Project preview" />
        <span>Build</span>
        <span className="font-serif italic font-normal lowercase normal-case">businesses</span>
        <Shot as="span" className="word-shot" site={aboutWordShots[1]} alt="Project preview" />
        <span className="text-orange drop-shadow-[0_6px_14px_rgba(251,133,0,0.35)]">Online</span>
        <Shot as="span" className="word-shot" site={aboutWordShots[2]} alt="Project preview" />
      </h2>

      <p
        id="animated-text"
        className="text-deepspace font-bold text-center leading-relaxed max-w-[820px] text-[clamp(1rem,2vw,1.50rem)] relative z-10 flex flex-wrap justify-center gap-x-[0.25em]"
      >
        {aboutParagraph.split(" ").map((word, wi) => (
          <span key={wi} className="inline-flex">
            {word.split("").map((ch, ci) => (
              <span key={ci} className="char-reveal" style={{ opacity: 0.55 }}>
                {ch}
              </span>
            ))}
          </span>
        ))}
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mt-4 sm:mt-6 relative z-10"
        data-fade="true"
        data-y="20"
        data-delay="0.25"
      >
        <a
          href="#projects"
          data-link=""
          data-magnetic
          className="bg-orange border-2 border-deepspace rounded-full text-white font-bold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-flex items-center gap-2 hover:bg-deepspace transition-colors group"
        >
          <span data-magnetic-text className="inline-flex items-center gap-2">
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-deepspace font-bold uppercase tracking-widest text-xs sm:text-sm border-b-2 border-deepspace/30 hover:border-deepspace pb-1 transition-colors"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
