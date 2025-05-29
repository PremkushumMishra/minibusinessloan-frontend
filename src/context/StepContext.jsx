import React, { createContext, useContext, useState, useEffect } from "react";

const StepContext = createContext();
export { StepContext };

export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState("mobile-verification");

  useEffect(() => {
    const savedStep = localStorage.getItem("user_step");
    if (savedStep) setCurrentStep(savedStep);
  }, []);

  const updateStep = (step) => {
    setCurrentStep(step);
    localStorage.setItem("user_step", step);
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
