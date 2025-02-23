
import { Check, X } from "lucide-react";

type YesNoStepProps = {
  value: boolean | null;
  onChange: (value: boolean) => void;
};

const YesNoStep = ({ value, onChange }: YesNoStepProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <button
        onClick={() => onChange(true)}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === true
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <Check 
              className={`w-12 h-12 ${
                value === true ? "text-primary" : "text-gray-600"
              }`}
            />
          </div>
          <h4 className="text-lg font-medium text-gray-900">Ja</h4>
        </div>
        {value === true && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-primary text-white rounded-full p-2">
              <Check className="w-4 h-4" />
            </div>
          </div>
        )}
      </button>

      <button
        onClick={() => onChange(false)}
        className={`relative p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
          value === false
            ? "ring-2 ring-primary shadow-md transform scale-105"
            : "hover:scale-105"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 rounded-full bg-gray-50">
            <X
              className={`w-12 h-12 ${
                value === false ? "text-primary" : "text-gray-600"
              }`}
            />
          </div>
          <h4 className="text-lg font-medium text-gray-900">Nein</h4>
        </div>
        {value === false && (
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

export default YesNoStep;
