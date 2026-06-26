import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import WatchSection from "@/components/WatchSection";
import PartnerSection from "@/components/PartnerSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <WatchSection />
        <PartnerSection />
        <FooterSection />
      </main>
    </>
  );
}
