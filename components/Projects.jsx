import Shot from "@/components/Shot";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 w-full relative z-40 pb-20 sm:pb-32 md:pb-40"
    >
      <div className="pt-14 sm:pt-24 md:pt-24 px-5 sm:px-8 md:px-10">
        <p className="text-sky font-medium tracking-[0.2em] uppercase text-sm sm:text-lg text-center">
          40+ Live Projects Across 7+ Industries
        </p>
        <h2
          className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-8 sm:mb-16 md:mb-10"
          data-fade="true"
          data-y="40"
        >
          W<span className="font-serif italic font-normal">o</span>rk
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col relative pb-8 md:pb-[20vh]" id="projects-container">
          {projects.map((p) => (
            <article key={p.num} className="project-card" data-accent={p.accent} data-color={p.color}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 w-full shrink-0">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`text-${p.color} font-black text-[clamp(2.5rem,6vw,80px)] leading-none`}>
                    {p.num}
                  </span>
                  <div className="flex flex-col">
                    <span className={`text-${p.color} uppercase text-xs sm:text-sm tracking-wider font-medium`}>
                      {p.count}
                    </span>
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl tracking-wide">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-2.5 justify-start md:justify-end md:max-w-[55%]">
                  {p.pills.map((pill) =>
                    pill.href ? (
                      <a
                        key={pill.name}
                        href={pill.href}
                        target="_blank"
                        rel="noopener"
                        className={`live-btn live-btn--${p.color}`}
                      >
                        {pill.name}
                      </a>
                    ) : (
                      <span key={pill.name} className={`live-btn-static live-btn-static--${p.color}`}>
                        {pill.name}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="project-grid">
                {p.shots.map((s) => (
                  <Shot
                    key={s.site}
                    as="a"
                    className={`project-shot project-shot--${s.size}`}
                    site={s.site}
                    alt={p.title}
                    href={s.site}
                    target="_blank"
                    rel="noopener"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
