
import { Building, Home, Building2 } from "lucide-react";
import { useState } from "react";

const BuildingTypeSection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Sie möchten einen Energieausweis bestellen?
          </h2>
          <p className="text-xl text-gray-600">
            Mit folgenden Fragen führen wir Sie zum richtigen Energieausweis für Ihre Immobilie.
          </p>
        </div>

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
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-12 max-w-5xl mx-auto px-4">
          <button
            className="flex items-center text-gray-600 hover:text-primary"
            disabled
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
            className={`flex items-center ${
              selectedType
                ? "text-primary hover:text-primary-dark"
                : "text-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedType}
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
      </div>
    </section>
  );
};

export default BuildingTypeSection;
