
interface Step {
  number: number;
  title: string;
  isActive: boolean;
}

interface VerbrauchsausweisProgressProps {
  steps: Step[];
  currentStep: number;
}

const VerbrauchsausweisProgress = ({ steps, currentStep }: VerbrauchsausweisProgressProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.number === currentStep
                    ? "bg-primary text-white"
                    : step.number < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.number}
              </div>
              <p className="mt-2 text-sm text-center whitespace-pre-line">
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 left-1/2 w-full h-[2px] ${
                  step.number < currentStep ? "bg-primary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerbrauchsausweisProgress;
