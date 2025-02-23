
import { useState } from "react";
import StepLayout from "./building-type/StepLayout";
import BuildingTypeStep from "./building-type/BuildingTypeStep";
import YesNoStep from "./building-type/YesNoStep";
import UnitCountStep from "./building-type/UnitCountStep";
import BuildingDateStep from "./building-type/BuildingDateStep";
import StepNavigation from "./building-type/StepNavigation";

const BuildingTypeSection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [hasBills, setHasBills] = useState<boolean | null>(null);
  const [unitCount, setUnitCount] = useState<"1-4" | ">4" | null>(null);
  const [buildingDate, setBuildingDate] = useState<"before" | "after" | null>(null);
  const [isRenovated, setIsRenovated] = useState<boolean | null>(null);

  const handleNext = () => {
    if (currentStep === 1 && selectedType) {
      setCurrentStep(2);
    } else if (currentStep === 2 && hasBills !== null) {
      setCurrentStep(3);
    } else if (currentStep === 3 && unitCount !== null) {
      setCurrentStep(4);
    } else if (currentStep === 4 && buildingDate !== null) {
      setCurrentStep(5);
    } else if (currentStep === 5 && isRenovated !== null) {
      setCurrentStep(6);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setHasBills(null);
    } else if (currentStep === 3) {
      setCurrentStep(2);
      setUnitCount(null);
    } else if (currentStep === 4) {
      setCurrentStep(3);
      setBuildingDate(null);
    } else if (currentStep === 5) {
      setCurrentStep(4);
      setIsRenovated(null);
    } else if (currentStep === 6) {
      setCurrentStep(5);
      // Don't reset any values when going back from results
    }
  };

  const canGoNext = 
    (currentStep === 1 && selectedType !== null) ||
    (currentStep === 2 && hasBills !== null) ||
    (currentStep === 3 && unitCount !== null) ||
    (currentStep === 4 && buildingDate !== null) ||
    (currentStep === 5 && isRenovated !== null);

  return (
    <section className="py-16 bg-[#F2FCE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Sie möchten einen Energieausweis bestellen?
          </h2>
          <p className="text-xl text-gray-600">
            Mit folgenden Fragen führen wir Sie zum richtigen Energieausweis für Ihre Immobilie.
          </p>
        </div>

        {currentStep === 1 && (
          <StepLayout title="Um was für ein Gebäude handelt es sich?">
            <BuildingTypeStep
              selectedType={selectedType}
              onSelect={setSelectedType}
            />
          </StepLayout>
        )}

        {currentStep === 2 && (
          <StepLayout title="Liegen Ihnen die letzten drei Jahresabrechnungen der Energieverbräuche des Gebäudes vor?">
            <YesNoStep
              value={hasBills}
              onChange={setHasBills}
            />
          </StepLayout>
        )}

        {currentStep === 3 && (
          <StepLayout title="Wie viele Wohneinheiten befinden sich in dem Gebäude?">
            <UnitCountStep
              value={unitCount}
              onChange={setUnitCount}
            />
          </StepLayout>
        )}

        {currentStep === 4 && (
          <StepLayout title="Wann wurde das Gebäude errichtet?">
            <BuildingDateStep
              value={buildingDate}
              onChange={setBuildingDate}
            />
          </StepLayout>
        )}

        {currentStep === 5 && (
          <StepLayout title="Wurde das Gebäude gemäß der Wärmeschutzverordnung von 1977 saniert?">
            <YesNoStep
              value={isRenovated}
              onChange={setIsRenovated}
            />
          </StepLayout>
        )}

        {currentStep === 6 && (
          <StepLayout title="Basierend auf Ihren Angaben empfehlen wir:">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-24 h-24 mb-4">
                      <img
                        src="/verbrauchausweis.png"
                        alt="Verbrauchsausweis"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Verbrauchsausweis</h3>
                    <p className="text-gray-600 text-center">
                      Basiert auf den tatsächlichen Energieverbräuchen der letzten drei Jahre.
                    </p>
                    <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                      Verbrauchsausweis bestellen
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-24 h-24 mb-4">
                      <img
                        src="/bedarfsausweis.png"
                        alt="Bedarfsausweis"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Bedarfsausweis</h3>
                    <p className="text-gray-600 text-center">
                      Basiert auf den technischen Eigenschaften und dem Zustand des Gebäudes.
                    </p>
                    <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                      Bedarfsausweis bestellen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </StepLayout>
        )}

        {currentStep < 6 && (
          <StepNavigation
            currentStep={currentStep - 1}
            totalSteps={5}
            canGoNext={canGoNext}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
      </div>
    </section>
  );
};

export default BuildingTypeSection;
