
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProcessSection from "../components/ProcessSection";
import VideoSection from "../components/VideoSection";
import ComparisonSection from "../components/ComparisonSection";
import PricingSection from "../components/PricingSection";
import BuildingTypeSection from "../components/BuildingTypeSection";
import StatsSection from "../components/StatsSection";
import FAQSection from "../components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessSection />
      <VideoSection />
      <ComparisonSection />
      <PricingSection />
      <BuildingTypeSection />
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default Index;
