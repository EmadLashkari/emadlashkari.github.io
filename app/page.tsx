import IntroText from "@/components/atoms/Intro";
import { LampContainerGsap } from "@/components/organisms/LightBulb/lamp-gsap";
import Timeline from "@/components/organisms/Timeline/Timeline";

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden relative">
      <LampContainerGsap>
        <IntroText />
      </LampContainerGsap>

      <Timeline />
    </main>
  );
}

{
  /* <section className="half-circle relative bg-[#07090c] w-full h-screen translate-y-[100%] rounded-tr-[50%_10%] rounded-tl-[50%_10%] will-change-transform">
          <TheJourney />
        </section> */
}
