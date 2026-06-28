import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BabaSection from "@/components/BabaSection";
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
        <BabaSection />
        <WatchSection />
        <PartnerSection />
        <CastSection />
        <FooterSection />
      </main>
    </>
  );
}
