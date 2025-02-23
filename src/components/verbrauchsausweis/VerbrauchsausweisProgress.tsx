
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
      <div className="flex justify-between items-center relative">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 flex flex-col items-center relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.number === 1
                    ? "bg-primary text-white"
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
                className={`absolute top-5 -right-1/2 w-full h-[2px] bg-gray-200`}
                style={{ transform: 'translateY(-50%)' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerbrauchsausweisProgress;
