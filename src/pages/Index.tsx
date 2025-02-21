
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProcessSection from "../components/ProcessSection";
import PricingSection from "../components/PricingSection";
import BuildingTypeSection from "../components/BuildingTypeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessSection />
      <PricingSection />
      <BuildingTypeSection />
    </div>
  );
};

export default Index;
