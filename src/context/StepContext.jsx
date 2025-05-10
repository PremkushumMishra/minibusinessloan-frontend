import { createContext, useState, useEffect, useContext } from "react";

export const StepContext = createContext();

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

// 👇 Ye missing tha — isko add karo
export const useStep = () => {
  return useContext(StepContext);
};
