import { archive } from "@/lib/data";

export default function Archive() {
  return (
    <section
      id="archive"
      className="bg-sky w-full relative z-40 pb-14 sm:pb-32 border-t border-deepspace/5 pt-14 sm:pt-32"
    >
      {/* floating preview that follows cursor */}
      <div id="archive-preview" className="archive-preview" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-deepspace/10 pb-10">
          <div className="flex flex-col gap-4">
            <p
              className="text-orange font-medium tracking-[0.3em] uppercase text-xs sm:text-sm"
              data-fade="true"
              data-y="10"
            >
              Project Directory
            </p>
            <h2
              className="text-deepspace font-black uppercase text-[clamp(2.5rem,5vw,70px)] leading-tight max-w-4xl"
              data-fade="true"
              data-y="20"
            >
              A Journey Through{" "}
              <span className="font-serif italic font-normal lowercase normal-case">40+ digital builds</span>
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-deepspace/30 uppercase text-xs tracking-widest mb-1">Total Impact</span>
            <span className="text-orange font-black text-4xl">7+ INDUSTRIES</span>
          </div>
        </div>

        <div className="flex flex-col w-full archive-list">
          {archive.map((row) => (
            <div
              key={row.num}
              className={`archive-row${row.last ? " archive-row--last" : ""}`}
              data-fade="true"
              data-site={row.site}
            >
              <div className="archive-row__lead">
                <span className="archive-row__num">{row.num}</span>
                <div className="flex flex-col">
                  <span className="archive-row__eyebrow">Featured Industry</span>
                  <h3 className="archive-row__title">{row.title}</h3>
                </div>
              </div>
              <div className="archive-row__pills">
                {row.pills.map((pill) =>
                  pill.href ? (
                    <a
                      key={pill.name}
                      href={pill.href}
                      target="_blank"
                      rel="noopener"
                      className="archive-pill-light"
                    >
                      {pill.name}
                    </a>
                  ) : (
                    <span key={pill.name} className="archive-pill-static-light">
                      {pill.name}
                    </span>
                  )
                )}
              </div>
              <span className="archive-row__bg">{row.bg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
