import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import WatchSection from "@/components/WatchSection";
import PartnerSection from "@/components/PartnerSection";
import CastSection from "@/components/CastSection";
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
        <CastSection />
        <FooterSection />
      </main>
    </>
  );
}
