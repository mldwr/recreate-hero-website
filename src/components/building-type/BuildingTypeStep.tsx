
import { Building, Home, Building2, Check } from "lucide-react";

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

type BuildingTypeStepProps = {
  selectedType: string | null;
  onSelect: (type: string) => void;
};

const BuildingTypeStep = ({ selectedType, onSelect }: BuildingTypeStepProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {buildingTypes.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
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
  );
};

export default BuildingTypeStep;
