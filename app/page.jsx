import SectionRail from "@/components/SectionRail";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

export default function Home() {
  return (
    <>
      <SectionRail />
      <div id="root" className="w-full relative overflow-x-clip">
        <Hero />
        <Marquee />
        <Stats />
        <Stack />
        <About />
        <Projects />
        <Archive />
        <Footer />
      </div>
      <Interactions />
    </>
  );
}
