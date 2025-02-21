
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProcessSection from "../components/ProcessSection";
import PricingSection from "../components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessSection />
      <PricingSection />
    </div>
  );
};

export default Index;
