import React from "react";
import { Navigate } from "react-router-dom";
import { useStep } from "../context/StepContext";

const stepOrder = [
  "mobile-verification",
  "aadhaar-verification",
  "applicant-personal-details",
  "applicant-business-details",
  "application-processing",
];

const ProtectedRoute = ({ allowedStep, children }) => {
  const { currentStep } = useStep();

  const currentIndex = stepOrder.indexOf(currentStep);
  const allowedIndex = stepOrder.indexOf(allowedStep);

  if (currentIndex < allowedIndex) {
    return <Navigate to={`/${currentStep}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
