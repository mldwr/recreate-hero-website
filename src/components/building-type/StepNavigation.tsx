
type StepNavigationProps = {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean;
  onBack: () => void;
  onNext: () => void;
};

const StepNavigation = ({ 
  currentStep, 
  totalSteps, 
  canGoNext, 
  onBack, 
  onNext 
}: StepNavigationProps) => {
  return (
    <>
      <div className="flex justify-between mt-12 max-w-5xl mx-auto px-4">
        <button
          onClick={onBack}
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
          onClick={onNext}
          className={`flex items-center ${
            canGoNext
              ? "text-primary hover:text-primary-dark"
              : "text-gray-400 cursor-not-allowed"
          }`}
          disabled={!canGoNext}
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

      <div className="mt-8 max-w-5xl mx-auto px-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default StepNavigation;
