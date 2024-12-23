import React from "react";

export const Stepper = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-4 w-4 rounded-full ${
            index < currentStep
              ? "bg-blue-500"
              : index === currentStep
              ? "bg-blue-300"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
