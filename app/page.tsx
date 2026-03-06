import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialBand from "@/components/TestimonialBand";
import PhilosophySection from "@/components/PhilosophySection";
import MenuSection from "@/components/MenuSection";
import PressSection from "@/components/PressSection";
import CateringSection from "@/components/CateringSection";
import InstagramSection from "@/components/InstagramSection";
import DarkImmersiveSection from "@/components/DarkImmersiveSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TestimonialBand />
      <PhilosophySection />
      <MenuSection />
      <PressSection />
      <CateringSection />
      <InstagramSection />
      <DarkImmersiveSection />
      <Footer />
    </main>
  );
}
