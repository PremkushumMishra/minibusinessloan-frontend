import React from "react";
import { Navigate } from "react-router-dom";
import { useStep } from "../context/StepContext";

const stepsOrder = [
  "mobile-verification",
  "name-email-verify",
  "kyc-process",
  "kyc-sucess",
  "additional-info",
  "co-applicant",
  "applicant-business-details",
  "application-processing"
];

const ProtectedRoute = ({ allowedStep , children }) => {
  const { currentStep } = useStep();

  const currentIndex = stepsOrder.indexOf(currentStep);
  const allowedIndex = stepsOrder.indexOf(allowedStep);

  if (allowedIndex > currentIndex) {
    console.log("Allowed Index:", allowedIndex);
    return <Navigate to={`/${currentStep}`} />;
  }
  else if( allowedIndex  === currentIndex){
    <Navigate to={`/${currentStep}`} />
  }

  console.log("Current Index:", currentIndex);
  return children;
};

export default ProtectedRoute;
