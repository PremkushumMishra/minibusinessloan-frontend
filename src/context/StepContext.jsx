import React, { createContext, useContext, useState, useEffect } from "react";

const StepContext = createContext();
export { StepContext };

export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(() => {
    // Initialize from localStorage if available
    return localStorage.getItem("user_step") || "mobile-verification";
  });

  // Update localStorage whenever currentStep changes
  useEffect(() => {
    localStorage.setItem("user_step", currentStep);
  }, [currentStep]);

  const updateStep = (newStep) => {
    console.log("Updating step to:", newStep);
    setCurrentStep(newStep);
  };

  return (
    <StepContext.Provider value={{ currentStep, updateStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};
