import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationProcessing = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const [approvedAmount, setApprovedAmount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate BRE and BSA analysis
    const simulateAnalysis = async () => {
      // Simulate 30 seconds of processing
      const totalTime = 30000; // 30 seconds in milliseconds
      const interval = 500; // Update every half second for smoother progress
      const steps = totalTime / interval;

      for (let i = 0; i <= steps; i++) {
        await new Promise((resolve) => setTimeout(resolve, interval));
        setProgress((i / steps) * 100);
      }

      // Generate random approved amount between 10L and 50L
      const amount = Math.floor(Math.random() * (5000000 - 1000000) + 1000000);
      setApprovedAmount(amount);
      setIsProcessing(false);
    };

    simulateAnalysis();
  }, []);

  if (isProcessing) {
    return (
      <div className="max-w-3xl mx-auto p-8 mt-30 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Application is Under Process
          </h2>
          <p className="text-gray-600 mb-2">
            We are analyzing your business details
          </p>
          <p className="text-gray-600 mb-6">
            This will take about 30 seconds...
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">✓ BRE Analysis in Progress</p>
            <p className="text-sm text-gray-500">✓ BSA Analysis in Progress</p>
            <p className="text-sm text-gray-500">✓ CIBIL Score Verification</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-30 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Congratulations!
        </h2>
        <p className="text-gray-600 mb-6">
          Your loan application has been approved
        </p>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-600 mb-2">Approved Loan Amount</p>
          <p className="text-4xl font-bold text-blue-600">
            ₹{approvedAmount.toLocaleString()}
          </p>
        </div>
        <p className="text-gray-600 mb-8">
          Our team will contact you shortly to proceed with the loan
          disbursement process.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ApplicationProcessing;
