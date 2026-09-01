const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-10 h-10 rounded-full transition-colors ${
            index <= currentStep
              ? "bg-black"
              : "bg-gray-300"
          }`}
          aria-label={`Step ${index + 1}${index === currentStep ? " (current)" : ""}`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
