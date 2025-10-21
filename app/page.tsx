import IntroText from "@/components/atoms/Intro";
import Header from "@/components/organisms/Header/Header";
import { LampContainerGsap } from "@/components/organisms/LightBulb/lamp-gsap";
import Timeline from "@/components/organisms/Timeline/Timeline";
import AboutMe from "@/components/pages/Landing/AboutMe";
import Projects from "@/components/pages/Landing/Projects";
import { SmoothAnimationProvider } from "@/lib/context/SmoothAnimation";

export default function Home() {
  return (
    <main className=" w-full h-full overflow-hidden relative bg-slate-950">
      {/* <SmoothAnimationProvider> */}
      <Header />
      <LampContainerGsap>
        <IntroText />
      </LampContainerGsap>
      <Projects />
      <AboutMe />
      <Timeline />
      {/* </SmoothAnimationProvider> */}
    </main>
  );
}

{
  /* <section className="half-circle relative bg-[#07090c] w-full h-screen translate-y-[100%] rounded-tr-[50%_10%] rounded-tl-[50%_10%] will-change-transform">
          <TheJourney />
        </section> */
}
