import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import VenueSection from "@/components/VenueSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <HeroSection />
      <CoupleSection />
      <VenueSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
