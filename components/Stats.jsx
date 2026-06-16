import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-cream w-full px-5 sm:px-8 md:px-10 py-14 sm:py-28 md:py-32 relative z-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col gap-4 max-w-3xl" data-fade="true" data-y="20">
          <span className="text-coral font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            By The Numbers
          </span>
          <h2 className="text-plum font-black uppercase leading-[0.95] text-[clamp(2rem,6vw,72px)]">
            Real results,{" "}
            <span className="font-serif italic font-normal lowercase text-coral normal-case">
              not just deliverables.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-[32px] overflow-hidden border border-plum/10 bg-plum/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-tile group bg-cream flex flex-col gap-3 p-7 sm:p-9 transition-colors duration-300"
              data-spotlight
              data-fade="true"
              data-y="30"
              data-delay={(0.05 + i * 0.07).toFixed(2)}
            >
              <span className="text-plum font-black leading-none text-[clamp(2.75rem,7vw,5rem)]">
                <span className="stat-num tabular-nums" data-count={s.count}>
                  0
                </span>
                <span className="text-coral">{s.suffix}</span>
              </span>
              <span className="text-plum/60 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
