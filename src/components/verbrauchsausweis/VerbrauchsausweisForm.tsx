
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { InfoIcon } from "lucide-react";

interface VerbrauchsausweisFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const VerbrauchsausweisForm = ({ currentStep, onStepChange }: VerbrauchsausweisFormProps) => {
  const [formData, setFormData] = useState({
    ausstellungsgrund: "",
    adresse: "",
    baujahr: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    onStepChange(currentStep + 1);
  };

  const handleBack = () => {
    onStepChange(currentStep - 1);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-gray-700">
            Achtung: Energieausweise können nur für ganze Gebäude ausgestellt werden. Eine Ausstellung für einzelne Wohneinheiten ist nicht möglich, außer es handelt sich um den gesamten wohnwirtschaftlichen Teil eines zusätzlich gewerblich genutzten Gebäudes.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Ausstellungsgrund
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <label className="text-sm text-gray-700">
                  Anlass für die Erstellung des Energieausweises
                </label>
                <InfoIcon className="w-4 h-4 text-gray-400" />
              </div>
              <Select
                value={formData.ausstellungsgrund}
                onValueChange={(value) => handleInputChange("ausstellungsgrund", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verkauf">Verkauf</SelectItem>
                  <SelectItem value="vermietung">Vermietung</SelectItem>
                  <SelectItem value="modernisierung">Modernisierung</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Gebäudedaten
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Adresse des Gebäudes
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <Input
                  placeholder="Adresse"
                  value={formData.adresse}
                  onChange={(e) => handleInputChange("adresse", e.target.value)}
                />
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Baujahr des Gebäudes
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <Input
                  placeholder="Baujahr Gebäude"
                  value={formData.baujahr}
                  onChange={(e) => handleInputChange("baujahr", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className={`flex items-center ${
            currentStep > 1
              ? "text-gray-600 hover:text-primary"
              : "text-gray-400 cursor-not-allowed"
          }`}
          disabled={currentStep === 1}
        >
          Zurück
        </button>
        <button
          onClick={handleNext}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default VerbrauchsausweisForm;
