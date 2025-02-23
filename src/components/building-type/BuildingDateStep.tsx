
import { Check } from "lucide-react";

type BuildingDateStepProps = {
  value: "before" | "after" | null;
  onChange: (value: "before" | "after") => void;
};

const BuildingDateStep = ({ value, onChange }: BuildingDateStepProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <button
        onClick={() => onChange("before")}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === "before"
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <svg
              className={`w-12 h-12 ${value === "before" ? "text-primary" : "text-gray-600"}`}
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
        {value === "before" && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-primary text-white rounded-full p-2">
              <Check className="w-4 h-4" />
            </div>
          </div>
        )}
      </button>

      <button
        onClick={() => onChange("after")}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === "after"
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <svg
              className={`w-12 h-12 ${value === "after" ? "text-primary" : "text-gray-600"}`}
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
        {value === "after" && (
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

export default BuildingDateStep;
