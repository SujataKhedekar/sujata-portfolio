import { EMAIL } from "@/lib/data";

const NAV = [
  ["#work", "Stack"],
  ["#about", "About"],
  ["#projects", "Work"],
  [`mailto:${EMAIL}`, "Contact"],
];

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col relative w-full overflow-hidden bg-sky">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full blur-[160px] bg-amber/30 pointer-events-none z-0 mix-blend-screen opacity-70" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[60vw] rounded-full blur-[180px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange/30 via-bluegreen/20 to-transparent pointer-events-none z-0 mix-blend-screen opacity-60" />
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full blur-[140px] bg-bluegreen/20 pointer-events-none z-0 mix-blend-multiply opacity-40" />

      {/* Navbar */}
      <nav
        className="flex justify-between items-center px-6 md:px-10 pt-6 pb-6 md:pt-8 w-full z-20"
        data-fade="true"
        data-y="-20"
        data-delay="0"
      >
        <div className="flex items-center gap-4 md:gap-8 justify-between w-full max-w-7xl mx-auto">
          {NAV.map(([href, label]) => (
            <a
              key={label}
              href={href}
              data-link={href.startsWith("#") ? "" : undefined}
              className="text-sm md:text-lg lg:text-[1.4rem] text-deepspace font-bold uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div
        className="mt-6 sm:mt-4 md:-mt-5 w-full overflow-hidden z-20 flex-grow-0 text-center"
        data-fade="true"
        data-y="40"
        data-delay="0.15"
      >
        <h1 className="text-orange font-black uppercase tracking-tight leading-none whitespace-nowrap text-[13vw] sm:text-[14vw] md:text-[12vw] lg:text-[14.5vw] drop-shadow-[0_10px_10px_rgba(251,133,0,0.2)]">
          Hi, i&apos;m sujata
        </h1>
      </div>

      <div
        className="absolute left-0 right-0 mx-auto z-10 w-[420px] md:w-[440px] lg:w-[520px] bottom-0 top-auto"
        id="magnet-wrapper"
        data-fade="true"
        data-y="30"
        data-delay="0.6"
      >
        <img
          src="/assets/sujata.png"
          alt="Sujata Khedekar, Full Stack Developer"
          className="w-full h-auto object-contain hero-portrait origin-bottom"
        />
      </div>

      <div className="flex justify-between items-center pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 mt-auto w-full max-w-7xl mx-auto">
        <p
          className="text-deepspace font-bold uppercase tracking-wide leading-relaxed max-w-[220px] sm:max-w-[320px] md:max-w-[480px] text-[clamp(0.85rem,1.2vw,1.5rem)] text-left"
          data-fade="true"
          data-y="20"
          data-delay="0.35"
        >
          A Full Stack Developer Crafting High-Performance Web Experiences
        </p>
        <div data-fade="true" data-y="20" data-delay="0.5">
          <a
            href={`mailto:${EMAIL}`}
            data-magnetic
            className="bg-orange border-2 border-deepspace rounded-full text-white font-bold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-block text-center hover:bg-deepspace transition-colors"
          >
            <span data-magnetic-text className="inline-block">
              Hire Me
            </span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        data-fade="true"
        data-delay="1"
        data-y="0"
      >
        <span className="text-deepspace/60 text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <span className="scroll-cue" />
      </div>
    </section>
  );
}
