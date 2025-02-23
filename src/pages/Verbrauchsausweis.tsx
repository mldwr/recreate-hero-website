
import { useState } from "react";
import VerbrauchsausweisForm from "../components/verbrauchsausweis/VerbrauchsausweisForm";
import VerbrauchsausweisProgress from "../components/verbrauchsausweis/VerbrauchsausweisProgress";

const steps = [
  {
    number: 1,
    title: "Ausstellungsgrund und\nGebäudedaten",
    isActive: true,
  },
  {
    number: 2,
    title: "Verbrauchsdaten",
    isActive: false,
  },
  {
    number: 3,
    title: "Erneuerbare Energien\nund Modernisierungen",
    isActive: false,
  },
  {
    number: 4,
    title: "Weitere Informationen",
    isActive: false,
  },
  {
    number: 5,
    title: "Bestellen",
    isActive: false,
  },
];

const Verbrauchsausweis = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <VerbrauchsausweisProgress steps={steps} currentStep={currentStep} />
        
        <div className="mt-12">
          <VerbrauchsausweisForm 
            currentStep={currentStep} 
            onStepChange={setCurrentStep} 
          />
        </div>
      </div>
    </div>
  );
};

export default Verbrauchsausweis;
