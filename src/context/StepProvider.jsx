import { useState, useEffect } from "react";
import { StepContext } from "./StepContext";

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