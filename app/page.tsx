import Header from "@/components/Header/Header";
import Intro from "@/components/pages/Landing/Intro";
import ProfileImg from "@/components/pages/Landing/ProfileImg";

export default function Home() {
  return (
    <main className="relative bg-darkSmoke w-full h-[100vh]">
      <Header />
      <ProfileImg />
      <Intro />
      <section></section>
    </main>
  );
}
