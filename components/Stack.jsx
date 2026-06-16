import { LayoutDashboard, Server, ShoppingBag, Gauge, Sparkles } from "lucide-react";
import { stackCards } from "@/lib/data";

const ICONS = {
  "layout-dashboard": LayoutDashboard,
  server: Server,
  "shopping-bag": ShoppingBag,
  gauge: Gauge,
  sparkles: Sparkles,
};

export default function Stack() {
  return (
    <section
      id="work"
      className="bg-white rounded-t-[20px] sm:rounded-t-[30px] px-5 sm:px-8 md:px-10 py-14 sm:py-24 md:py-24 w-full relative z-30"
    >
      <div className="flex flex-col items-center gap-3 mb-8 sm:mb-16" data-fade="true" data-y="20">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-deepspace/30" />
          <p className="text-deepspace/60 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
            What I Work With
          </p>
          <span className="w-8 h-px bg-deepspace/30" />
        </div>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none w-full">
          St<span className="font-serif italic font-normal">a</span>ck
        </h2>
      </div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full pb-4"
        id="stack-grid"
      >
        {stackCards.map((card, i) => {
          const Icon = ICONS[card.icon];
          return (
            <article
              key={card.num}
              className={`service-card${card.wide ? " md:col-span-2 md:flex-row md:items-center md:gap-12" : ""}`}
              data-tilt
              data-spotlight
              data-accent={card.accent}
              data-fade="true"
              data-y="30"
              data-delay={(0.1 + i * 0.08).toFixed(2)}
            >
              <span className={`service-ghost${card.wide ? " service-ghost--lg" : ""}`}>{card.num}</span>

              {card.wide ? (
                <div className="flex items-center gap-6 relative z-10 shrink-0">
                  <div className="service-num" style={{ WebkitTextStroke: "2px #0C0C0C", color: card.accent }}>
                    {card.num}
                  </div>
                  <span className="service-icon">
                    <Icon className="w-6 h-6" />
                  </span>
                </div>
              ) : (
                <div className="flex items-start justify-between relative z-10">
                  <div className="service-num" style={{ WebkitTextStroke: "2px #0C0C0C", color: card.accent }}>
                    {card.num}
                  </div>
                  <span className="service-icon">
                    <Icon className="w-6 h-6" />
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-4 relative z-10">
                <h3 className="service-title">{card.title}</h3>
                <p className={`service-desc${card.wide ? " max-w-2xl" : ""}`}>{card.desc}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {card.pills.map((p) => (
                    <span key={p} className="tech-pill">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
