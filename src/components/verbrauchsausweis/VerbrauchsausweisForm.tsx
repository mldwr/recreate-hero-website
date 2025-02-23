import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { InfoIcon, AlertCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import YesNoStep from "../building-type/YesNoStep";
import { toast } from "sonner";

interface VerbrauchsausweisFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

interface FormErrors {
  [key: string]: boolean;
}

const VerbrauchsausweisForm = ({
  currentStep,
  onStepChange
}: VerbrauchsausweisFormProps) => {
  const [formData, setFormData] = useState({
    ausstellungsgrund: "",
    adresse: "",
    baujahr: "",
    wohneinheiten: "",
    wohnflaeche: "",
    gewerbeanteil: "",
    hasUploadedFiles: false,
    keller: "",
    fensterlüftung: null as boolean | null,
    schachtlüftung: null as boolean | null,
    lüftungOhneWärme: null as boolean | null,
    lüftungMitWärme: null as boolean | null,
    kühlung: null as boolean | null
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    let hasErrors = false;

    // Required fields validation
    const requiredFields = {
      ausstellungsgrund: "Ausstellungsgrund",
      adresse: "Adresse",
      baujahr: "Baujahr",
      wohneinheiten: "Wohneinheiten",
      wohnflaeche: "Wohnfläche",
      gewerbeanteil: "Gewerbeanteil",
      keller: "Keller",
      fensterlüftung: "Fensterlüftung",
      schachtlüftung: "Schachtlüftung",
      lüftungOhneWärme: "Lüftungsanlage ohne Wärmerückgewinnung",
      lüftungMitWärme: "Lüftungsanlage mit Wärmerückgewinnung",
      kühlung: "Kühlung"
    };

    Object.entries(requiredFields).forEach(([field, label]) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = true;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      toast.error("Bitte füllen Sie alle erforderlichen Felder aus.", {
        description: "Die markierten Felder müssen ausgefüllt werden."
      });
    }

    return !hasErrors;
  };

  const handleNext = () => {
    if (validateForm()) {
      onStepChange(currentStep + 1);
    }
  };

  const handleBack = () => {
    onStepChange(currentStep - 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        hasUploadedFiles: true
      }));
    }
  };

  const handleBooleanChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const getFieldErrorClass = (field: string) => {
    return errors[field] ? "border-red-500 focus-visible:ring-red-500" : "";
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
                onValueChange={value => handleInputChange("ausstellungsgrund", value)}
              >
                <SelectTrigger className={getFieldErrorClass("ausstellungsgrund")}>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verkauf">Verkauf</SelectItem>
                  <SelectItem value="vermietung">Vermietung</SelectItem>
                  <SelectItem value="modernisierung">Modernisierung</SelectItem>
                </SelectContent>
              </Select>
              {errors.ausstellungsgrund && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Bitte wählen Sie einen Ausstellungsgrund</span>
                </div>
              )}
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
                  onChange={e => handleInputChange("adresse", e.target.value)}
                  className={getFieldErrorClass("adresse")}
                />
                {errors.adresse && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte geben Sie die Adresse ein</span>
                  </div>
                )}
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
                  onChange={e => handleInputChange("baujahr", e.target.value)}
                  className={getFieldErrorClass("baujahr")}
                />
                {errors.baujahr && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte geben Sie das Baujahr an</span>
                  </div>
                )}
              </div>

              {/* New fields */}
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Anzahl der im Gebäude vorhandenen Wohneinheiten
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <Input 
                  placeholder="Wohneinheiten" 
                  value={formData.wohneinheiten} 
                  onChange={e => handleInputChange("wohneinheiten", e.target.value)} 
                  className={getFieldErrorClass("wohneinheiten")}
                />
                {errors.wohneinheiten && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte geben Sie die Anzahl der Wohneinheiten an</span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Wohnfläche von allen im Gebäude vorhandenen Wohneinheiten
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <Input 
                  placeholder="Wohnfläche in m²" 
                  value={formData.wohnflaeche} 
                  onChange={e => handleInputChange("wohnflaeche", e.target.value)}
                  className={getFieldErrorClass("wohnflaeche")}
                />
                {errors.wohnflaeche && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte geben Sie die Wohnfläche an</span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Befindet sich Gewerbe in dem Gebäude?
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <RadioGroup 
                  value={formData.gewerbeanteil}
                  onValueChange={value => handleInputChange("gewerbeanteil", value)}
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${errors.gewerbeanteil ? 'text-red-500' : ''}`}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nein" id="nein" />
                    <Label htmlFor="nein">nein, bzw. bis 10 % Gewerbeanteil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ja-wohnungsaehnlich" id="ja-wohnungsaehnlich" />
                    <Label htmlFor="ja-wohnungsaehnlich">Ja, 10-50% Gewerbeanteil und wohnungsähnlich</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ja-nicht-wohnungsaehnlich" id="ja-nicht-wohnungsaehnlich" />
                    <Label htmlFor="ja-nicht-wohnungsaehnlich">Ja, 10-50% und nicht wohnungsähnlich</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ja-50-90" id="ja-50-90" />
                    <Label htmlFor="ja-50-90">Ja, 50-90% Gewerbeanteil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ja-ueber-90" id="ja-ueber-90" />
                    <Label htmlFor="ja-ueber-90">Ja, über 90% Gewerbeanteil</Label>
                  </div>
                </RadioGroup>
                {errors.gewerbeanteil && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie einen Gewerbeanteil aus</span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Können Unterlagen zur Wohnfläche hochgeladen werden? (optional)
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2">
                      <img src="/lovable-uploads/d4e29dc7-2bd3-47da-9c38-05e94c6e4b61.png" alt="Upload" className="w-12 h-12" />
                    </div>
                    <p className="text-sm text-gray-600 text-center mb-2">Bis zu 10 Dateien auswählen oder in dieses Feld ziehen</p>
                    <p className="text-xs text-gray-500">Max. Dateigröße beträgt 10 MB. Formate: jpeg, png, pdf</p>
                    <input
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Dateien auswählen
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <label className="text-sm text-gray-700">
                    Keller
                  </label>
                  <InfoIcon className="w-4 h-4 text-gray-400" />
                </div>
                <RadioGroup 
                  value={formData.keller}
                  onValueChange={value => handleInputChange("keller", value)}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${errors.keller ? 'text-red-500' : ''}`}
                >
                  <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <img src="/lovable-uploads/d4e29dc7-2bd3-47da-9c38-05e94c6e4b61.png" alt="Beheizt" className="w-16 h-16 mb-2" />
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beheizt" id="beheizt" />
                      <Label htmlFor="beheizt">Ja, beheizt</Label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <img src="/lovable-uploads/d4e29dc7-2bd3-47da-9c38-05e94c6e4b61.png" alt="Unbeheizt" className="w-16 h-16 mb-2" />
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unbeheizt" id="unbeheizt" />
                      <Label htmlFor="unbeheizt">Ja, unbeheizt</Label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <img src="/lovable-uploads/d4e29dc7-2bd3-47da-9c38-05e94c6e4b61.png" alt="Kein Keller" className="w-16 h-16 mb-2" />
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nein" id="kein-keller" />
                      <Label htmlFor="kein-keller">Nein</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.keller && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie eine Kelleroption</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Building Ventilation Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              Gebäudelüftung
              <InfoIcon className="w-4 h-4 text-gray-400" />
            </h2>
            <div className="space-y-8">
              <div>
                <label className="block text-sm text-gray-700 mb-4">
                  Fensterlüftung
                </label>
                <YesNoStep 
                  value={formData.fensterlüftung}
                  onChange={(value) => handleBooleanChange("fensterlüftung", value)}
                  error={errors.fensterlüftung}
                />
                {errors.fensterlüftung && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie eine Option</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-4">
                  Schachtlüftung
                </label>
                <YesNoStep 
                  value={formData.schachtlüftung}
                  onChange={(value) => handleBooleanChange("schachtlüftung", value)}
                  error={errors.schachtlüftung}
                />
                {errors.schachtlüftung && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie eine Option</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-4">
                  Lüftungsanlage ohne Wärmerückgewinnung
                </label>
                <YesNoStep 
                  value={formData.lüftungOhneWärme}
                  onChange={(value) => handleBooleanChange("lüftungOhneWärme", value)}
                  error={errors.lüftungOhneWärme}
                />
                {errors.lüftungOhneWärme && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie eine Option</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-4">
                  Lüftungsanlage mit Wärmerückgewinnung
                </label>
                <YesNoStep 
                  value={formData.lüftungMitWärme}
                  onChange={(value) => handleBooleanChange("lüftungMitWärme", value)}
                  error={errors.lüftungMitWärme}
                />
                {errors.lüftungMitWärme && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Bitte wählen Sie eine Option</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cooling Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              Kühlung
              <InfoIcon className="w-4 h-4 text-gray-400" />
            </h2>
            <YesNoStep 
              value={formData.kühlung}
              onChange={(value) => handleBooleanChange("kühlung", value)}
              error={errors.kühlung}
            />
            {errors.kühlung && (
              <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                <AlertCircle className="w-4 h-4" />
                <span>Bitte wählen Sie eine Option</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={handleBack} className={`flex items-center ${currentStep > 1 ? "text-gray-600 hover:text-primary" : "text-gray-400 cursor-not-allowed"}`} disabled={currentStep === 1}>
          Zurück
        </button>
        <button onClick={handleNext} className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
          Weiter
        </button>
      </div>
    </div>
  );
};

export default VerbrauchsausweisForm;
