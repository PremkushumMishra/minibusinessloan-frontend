import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/useStep";

const AadhaarVerification = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateStep } = useStep();

  // API Configuration - Just change these URLs when switching APIs
  const API_CONFIG = {
    BASE_URL: "http://localhost:3000/api",
    ENDPOINTS: {
      SEND_OTP: "/aadhaar/send-otp",
      VERIFY_OTP: "/aadhaar/verify-otp",
      RESEND_OTP: "/aadhaar/resend-otp",
    },
  };

  const handleAadhaarChange = (e) => {
    const value = e.target.value;

    // Only allow digits
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Limit to 12 digits
    if (value.length <= 12) {
      setAadhaarNumber(value);
    }
  };

  const handleAadhaarSubmit = async (e) => {
    e.preventDefault();
    if (aadhaarNumber.length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar number");
      return;
    }

    setIsLoading(true);
    try {
      // For development/testing - simulate API call
      console.log("Sending OTP for Aadhaar:", aadhaarNumber);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, uncomment this and remove the simulation code above
      /*
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEND_OTP}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ aadhaarNumber })
      })

      const result = await response.json()
      */

      // For development - simulate successful response
      const result = { success: true };

      if (result.success) {
        setShowOtpInput(true);
        // For development only - remove in production
        console.log("Demo OTP: 123456");
      } else {
        alert(result.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      // For development/testing - simulate API call
      console.log("Verifying OTP:", otp);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For development - simulate verification
      const result = { verified: otp === "123456" };

      if (result.verified) {
        console.log("OTP verified successfully");

        setVerificationStatus("success");
        setTimeout(() => {
          updateStep("applicant-personal-details");
          navigate("/applicant-personal-details");
        }, 1000);
      } else {
        console.log("OTP verification failed");

        setVerificationStatus("error");
        alert(result.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      // For development/testing - simulate API call
      console.log("Resending OTP for Aadhaar:", aadhaarNumber);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, uncomment this and remove the simulation code above
      /*
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RESEND_OTP}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ aadhaarNumber })
      })

      const result = await response.json()
      */

      // For development - simulate successful response
      const result = { success: true };

      if (result.success) {
        alert("OTP resent successfully!");
        // For development only - remove in production
        console.log("Demo OTP: 123456");
      } else {
        alert(result.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error("Error resending OTP:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/20">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:rotate-6 transition-transform duration-300">
            <span className="text-5xl">🪪</span>
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Aadhaar Verification
          </h2>
          <p className="mt-3 text-gray-600 text-lg font-medium">
            Please verify your Aadhaar number to continue
          </p>
        </div>

        {!showOtpInput ? (
          // Aadhaar Number Input Form
          <form className="mt-8 space-y-6" onSubmit={handleAadhaarSubmit}>
            <div>
              <label
                htmlFor="aadhaar"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Aadhaar Number
              </label>
              <div className="relative group">
                <input
                  id="aadhaar"
                  name="aadhaar"
                  type="text"
                  required
                  value={aadhaarNumber}
                  onChange={handleAadhaarChange}
                  className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg font-medium tracking-wider group-hover:border-purple-200"
                  placeholder="Enter 12-digit Aadhaar number"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <span className="text-2xl text-purple-400 group-hover:text-purple-500 transition-colors duration-200">
                    🪪
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                {aadhaarNumber.length}/12 digits entered
              </p>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || aadhaarNumber.length !== 12}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                  isLoading || aadhaarNumber.length !== 12
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending OTP...
                  </span>
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </form>
        ) : (
          // OTP Input Form
          <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Enter OTP
              </label>
              <div className="relative group">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="6"
                  className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-center tracking-[0.5em] text-2xl font-semibold group-hover:border-purple-200"
                  placeholder="Enter 6-digit OTP"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <span className="text-2xl text-purple-400 group-hover:text-purple-500 transition-colors duration-200">
                    🔐
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isLoading}
                className="text-sm font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
              >
                Resend OTP
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Verification Status Messages */}
        {verificationStatus === "success" && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 transform transition-all duration-300 animate-fade-in shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-4xl">✅</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Verification Successful!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Your Aadhaar number has been verified successfully.
                </p>
              </div>
            </div>
          </div>
        )}

        {verificationStatus === "error" && (
          <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-100 transform transition-all duration-300 animate-fade-in shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-4xl">❌</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-red-800">
                  Verification Failed
                </h3>
                <p className="text-sm text-red-700 mt-1">
                  The OTP you entered is incorrect. Please try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        {showOtpInput && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setShowOtpInput(false);
                setOtp("");
                setVerificationStatus(null);
              }}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-1"
            >
              <span>←</span>
              <span>Back to Aadhaar Number</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AadhaarVerification;
