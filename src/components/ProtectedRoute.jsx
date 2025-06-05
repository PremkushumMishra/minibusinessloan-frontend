import React from "react";
import { Navigate } from "react-router-dom";
import { useStep } from "../context/StepContext";

const stepsOrder = [
  "mobile-verification",
  "name-email-verify",
  "kyc-process",
  // "kyc-sucess",
  "additional-info",
  "co-applicant",
  "applicant-business-details",
  "bank-statement",
  "bsa-success",
  // "application-processing"
];

const ProtectedRoute = ({ allowedStep , children }) => {
  const { currentStep } = useStep();
  const token = localStorage.getItem('authToken');

  console.log("test1",currentStep,allowedStep)
  const currentIndex = stepsOrder.indexOf(currentStep);
  const allowedIndex = stepsOrder.indexOf(allowedStep);

  console.log("test4",currentIndex,allowedIndex , token)

  if (!token) {
    // Redirect to mobile verification if no token is present
    return <Navigate to="/mobile-verification" replace />;
  }

  console.log("test5",currentIndex,allowedIndex)

  if (allowedIndex > currentIndex) {
    return <Navigate to={`/${currentStep}`} />;
  }

  return children;
};

export default ProtectedRoute;
