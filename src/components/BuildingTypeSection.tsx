import { Building, Home, Building2, Check, X } from "lucide-react";
import { useState } from "react";

const BuildingTypeSection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [hasBills, setHasBills] = useState<boolean | null>(null);
  const [unitCount, setUnitCount] = useState<"1-4" | ">4" | null>(null);
  const [buildingDate, setBuildingDate] = useState<"before" | "after" | null>(null);

  const buildingTypes = [
    {
      id: "residential",
      icon: Home,
      title: "Reines Wohngebäude",
    },
    {
      id: "mixed",
      icon: Building,
      title: "Gemischt genutztes\nGebäude",
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Reines Gewerbegebäude",
    },
  ];

  const handleNext = () => {
    if (currentStep === 1 && selectedType) {
      setCurrentStep(2);
    } else if (currentStep === 2 && hasBills !== null) {
      setCurrentStep(3);
    } else if (currentStep === 3 && unitCount !== null) {
      setCurrentStep(4);
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
    }
  };

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
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900">
                Um was für ein Gebäude handelt es sich?
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {buildingTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                      selectedType === type.id
                        ? "ring-2 ring-primary shadow-md transform scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-6">
                      <div className="p-4 rounded-full bg-gray-50">
                        <Icon
                          className={`w-12 h-12 ${
                            selectedType === type.id ? "text-primary" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 whitespace-pre-line">
                        {type.title}
                      </h4>
                    </div>
                    {selectedType === type.id && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-primary text-white rounded-full p-2">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900">
                Liegen Ihnen die letzten drei Jahresabrechnungen der Energieverbräuche des Gebäudes vor?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <button
                onClick={() => setHasBills(true)}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  hasBills === true
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <Check className={`w-12 h-12 ${hasBills === true ? "text-primary" : "text-gray-600"}`} />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Ja</h4>
                </div>
                {hasBills === true && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>

              <button
                onClick={() => setHasBills(false)}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  hasBills === false
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <X className={`w-12 h-12 ${hasBills === false ? "text-primary" : "text-gray-600"}`} />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Nein</h4>
                </div>
                {hasBills === false && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900">
                Wie viele Wohneinheiten befinden sich in dem Gebäude?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <button
                onClick={() => setUnitCount("1-4")}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  unitCount === "1-4"
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <svg
                      className={`w-12 h-12 ${unitCount === "1-4" ? "text-primary" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fill="currentColor"
                        stroke="none"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        1-4
                      </text>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">1 - 4</h4>
                </div>
                {unitCount === "1-4" && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>

              <button
                onClick={() => setUnitCount(">4")}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  unitCount === ">4"
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <svg
                      className={`w-12 h-12 ${unitCount === ">4" ? "text-primary" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fill="currentColor"
                        stroke="none"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        >4
                      </text>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">&gt; 4</h4>
                </div>
                {unitCount === ">4" && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </>
        )}

        {currentStep === 4 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900">
                Wann wurde das Gebäude errichtet?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <button
                onClick={() => setBuildingDate("before")}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  buildingDate === "before"
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <svg
                      className={`w-12 h-12 ${buildingDate === "before" ? "text-primary" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path d="M9 5L5 9M15 5l4 4" strokeLinecap="round"/>
                      <rect x="4" y="9" width="16" height="12" strokeLinecap="round"/>
                      <path d="M8 12h8M8 15h4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Bauantrag vor 01.11.1977</h4>
                </div>
                {buildingDate === "before" && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>

              <button
                onClick={() => setBuildingDate("after")}
                className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  buildingDate === "after"
                    ? "ring-2 ring-primary shadow-md transform scale-105"
                    : "hover:scale-105"
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="p-4 rounded-full bg-gray-50">
                    <svg
                      className={`w-12 h-12 ${buildingDate === "after" ? "text-primary" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path d="M15 19l4-4M9 19l-4-4" strokeLinecap="round"/>
                      <rect x="4" y="3" width="16" height="12" strokeLinecap="round"/>
                      <path d="M8 6h8M8 9h4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">Bauantrag ab 01.11.1977</h4>
                </div>
                {buildingDate === "after" && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-white rounded-full p-2">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </>
        )}

        <div className="flex justify-between mt-12 max-w-5xl mx-auto px-4">
          <button
            onClick={handleBack}
            className={`flex items-center ${
              currentStep > 1
                ? "text-gray-600 hover:text-primary"
                : "text-gray-400 cursor-not-allowed"
            }`}
            disabled={currentStep === 1}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zurück
          </button>
          <button
            onClick={handleNext}
            className={`flex items-center ${
              (currentStep === 1 && selectedType) || 
              (currentStep === 2 && hasBills !== null) ||
              (currentStep === 3 && unitCount !== null) ||
              (currentStep === 4 && buildingDate !== null)
                ? "text-primary hover:text-primary-dark"
                : "text-gray-400 cursor-not-allowed"
            }`}
            disabled={
              (currentStep === 1 && !selectedType) || 
              (currentStep === 2 && hasBills === null) ||
              (currentStep === 3 && unitCount === null) ||
              (currentStep === 4 && buildingDate === null)
            }
          >
            Weiter
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-5xl mx-auto px-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingTypeSection;
