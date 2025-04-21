import { AnimatedBackground } from "@/components/organisms/Background/Animated-Background";
import Navbar from "@/components/organisms/Navbar/navbar";
import ScrollWraper from "@/components/organisms/ScrollWraper/ScrollWraper";
import Story from "@/components/pages/Landing/Story";
import TheJourney from "@/components/pages/Landing/TheJourney";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* <Navbar /> */}
      <ScrollWraper>
        <section className="w-full h-full first-page">
          <AnimatedBackground />
        </section>
        <section className="half-circle relative bg-[#07090c] w-full h-screen translate-y-[100%] rounded-tr-[50%_10%] rounded-tl-[50%_10%] will-change-transform">
          <TheJourney />
        </section>
      </ScrollWraper>
      <section className="w-full h-screen bg-[#07090c] flex justify-start items-center">
        <Story />
      </section>
    </main>
  );
}
