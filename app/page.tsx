import { AnimatedBackground } from "@/components/organisms/Background/Animated-Background";
import Navbar from "@/components/organisms/Navbar/navbar";
import ScrollWraper from "@/components/organisms/ScrollWraper/ScrollWraper";

export default function Home() {
  return (
    <main className="relative w-full h-[100vh]">
      <Navbar />
      <ScrollWraper>
        <AnimatedBackground />
        <AnimatedBackground />
      </ScrollWraper>
    </main>
  );
}
