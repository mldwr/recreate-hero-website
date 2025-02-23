
import { Check } from "lucide-react";

type UnitCountStepProps = {
  value: "1-4" | ">4" | null;
  onChange: (value: "1-4" | ">4") => void;
};

const UnitCountStep = ({ value, onChange }: UnitCountStepProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <button
        onClick={() => onChange("1-4")}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === "1-4"
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <svg
              className={`w-12 h-12 ${value === "1-4" ? "text-primary" : "text-gray-600"}`}
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
        {value === "1-4" && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-primary text-white rounded-full p-2">
              <Check className="w-4 h-4" />
            </div>
          </div>
        )}
      </button>

      <button
        onClick={() => onChange(">4")}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === ">4"
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <svg
              className={`w-12 h-12 ${value === ">4" ? "text-primary" : "text-gray-600"}`}
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
                {'>'}4
              </text>
            </svg>
          </div>
          <h4 className="text-lg font-medium text-gray-900">{'>'} 4</h4>
        </div>
        {value === ">4" && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-primary text-white rounded-full p-2">
              <Check className="w-4 h-4" />
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default UnitCountStep;
