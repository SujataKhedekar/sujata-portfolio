import { ArrowRight, ArrowUp, Copy, Linkedin, Github, Twitter } from "lucide-react";
import { EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white w-full px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-24 relative z-40 border-t border-deepspace/10 flex flex-col"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10 sm:gap-12 md:gap-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="flex flex-col gap-6" data-fade="true" data-y="20">
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-green/30 bg-green/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              <span className="text-deepspace font-bold uppercase tracking-widest text-xs">Available for work</span>
              <span className="text-deepspace/40 font-medium text-xs tabular-nums" id="local-time">
                --:--:-- IST
              </span>
            </div>
            <h2 className="text-deepspace font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none max-w-2xl">
              Let&apos;s <span className="font-serif italic font-normal lowercase normal-case">build</span> it
            </h2>
            <p className="text-deepspace/70 text-lg md:text-xl font-light">
              Available for freelance opportunities and full-time roles.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            data-magnetic
            className="group rounded-full bg-orange text-white font-bold uppercase tracking-widest px-8 md:px-10 py-4 hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(251,133,0,0.2)] mb-2"
            data-fade="true"
            data-y="20"
            data-delay="0.2"
          >
            <span data-magnetic-text className="inline-flex items-center gap-3">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-4" data-fade="true" data-y="20">
          <span className="text-deepspace/40 font-bold uppercase tracking-[0.3em] text-xs">Drop me a line</span>
          <button
            type="button"
            id="copy-email"
            data-email={EMAIL}
            className="group flex items-center gap-4 text-left w-fit max-w-full"
          >
            <span className="email-text text-deepspace font-black uppercase tracking-tight text-[clamp(1.4rem,5vw,3.5rem)] leading-none break-all transition-colors group-hover:text-orange">
              {EMAIL}
            </span>
            <span className="copy-hint shrink-0 flex items-center gap-1.5 text-deepspace/50 font-bold uppercase tracking-widest text-xs border border-deepspace/15 rounded-full px-3 py-1.5 group-hover:border-orange group-hover:text-orange transition-colors">
              <Copy className="w-3.5 h-3.5" />
              <span className="copy-label">Copy</span>
            </span>
          </button>
        </div>

        <div className="w-full h-px bg-deepspace/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-deepspace/50 text-sm font-medium tracking-wide">
          <p>&copy; 2026 Sujata Khedekar. All Rights Reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="footer-social">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/SujataKhedekar" target="_blank" rel="noopener" className="footer-social">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener" className="footer-social">
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </div>
          <button
            type="button"
            id="back-to-top"
            className="group flex items-center gap-2 text-deepspace font-bold uppercase tracking-widest text-xs hover:text-orange transition-colors"
          >
            Back to top
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-deepspace/15 group-hover:border-orange group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
