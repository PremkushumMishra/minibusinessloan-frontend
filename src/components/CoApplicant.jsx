import React, { useState, useEffect } from "react";
import axios from "axios";
import API_CONFIG from "../config";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/StepContext";
const CoApplicant = () => {
  const { currentStep } = useStep();
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [error, setError] = useState("");
  const [customerID, setCustomerID] = useState(null);
  // const customerID = "MBLC0050";
  const navigate = useNavigate();

  // PAN validation: 5 letters, 4 digits, 1 letter
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;

  const isMobileValid = /^\d{10}$/.test(mobile);
  const isPanValid = panRegex.test(pan);

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}/get/user/details/web`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.data?.status && response.data?.data?.customerID) {
        setCustomerID(response.data.data.customerID);
        console.log("CustomerID set:", response.data.data.customerID);
      } else if (response.data?.customerID) {
        setCustomerID(response.data.customerID);
        console.log("CustomerID set:", response.data.customerID);
      }
    } catch (err) {
      console.error("User Details API Error:", err);
      setError("Failed to fetch user details. Please try again.");
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setStatus(null);
    
    if (!isMobileValid) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!isPanValid) {
      setError("Please enter a valid PAN number.");
      return;
    }
    
    if (!customerID) {
      setError("Customer ID not found. Please refresh and try again.");
      await fetchUserDetails(); // Try to fetch again
      return;
    }
    
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);
      console.log("📦 CustomerID being sent:", customerID);

      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/send-otp-co-applicant`,
        {
          phone: mobile,
          pan: pan,
          customerID: customerID, // Using the customerID from state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      console.log(response, "co-applicant response");

      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        console.log(response.data, "response.data");

        // Update customerID if a new one is returned
        if (response.data?.customerID && response.data.customerID.length > 6) {
          setCustomerID(response.data.customerID);
        }
        
        setShowOtpInput(true);
        setStatus(null);
        alert("OTP sent to co-applicant mobile number!");
      } else {
        setError(response.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setStatus(null);
    
    if (otp.length !== 6 && otp.length !== 4) {
      setError("Please enter a valid 4 or 6-digit OTP.");
      return;
    }
    
    // Check if customerID is available
    if (!customerID || customerID.length <= 6) {
      setError("CustomerID is missing or invalid.");
      await fetchUserDetails(); // Try to fetch again
      return;
    }
    
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);
      console.log("📦 CustomerID being sent for verification:", customerID);
      
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/verify-otp-co-applicant`,
        {
          phone: mobile,
          otp: otp,
          customerID: customerID, // Using the customerID from state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        setStatus("success");
        console.log("✅ OTP verified successfully! Navigating to business details..======>>.",
          response.data
        );
        localStorage.setItem("user_step", "applicant-business-details");
        // console.log("✅ OTP verified successfully! Navigating to business details..======>>.",
        setTimeout(() => {
          navigate("/applicant-business-details");
        }, 1000);
      } else if (
        response.data?.status === false &&
        response.data?.message === "Lead Rejected"
      ) {
        navigate("/applicant-business-details");
      } else {
        setStatus("error");
        setError(response.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("Error ye rha:", err);
      setStatus("error");
      setError(
        err.response?.data?.message || "Network error. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentStep !== "co-applicant") {
      // Redirect to the correct step/page
      navigate(`/${currentStep}`);
    }
  }, [currentStep, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E0BCF3] to-[#7EE7EE] py-12 px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-t-3xl rounded-bl-3xl shadow-xl p-8 mt-20">
        <h2 className="text-2xl fon text-center text-[#003366] mb-6">
          Co-Applicant Verification
        </h2>
        
        {/* Show customerID for debugging (remove in production) */}
        {customerID && (
          <p className="text-xs text-gray-500 mb-4 text-center">
            Customer ID: {customerID}
          </p>
        )}
        
        <form
          onSubmit={showOtpInput ? handleVerifyOtp : handleSendOtp}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E0BCF3] focus:border-transparent transition-all duration-200 text-lg"
              placeholder="Enter 10-digit mobile number"
              disabled={showOtpInput}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              PAN Number
            </label>
            <input
              type="text"
              maxLength={10}
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E0BCF3] focus:border-transparent transition-all duration-200 text-lg"
              placeholder="Enter PAN number (ABCDE1234F)"
              disabled={showOtpInput}
            />
          </div>
          {showOtpInput && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E0BCF3] focus:border-transparent transition-all duration-200 text-lg tracking-widest text-center"
                placeholder="Enter 4 or 6-digit OTP"
              />
            </div>
          )}
          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}
          {status === "success" && (
            <p className="text-green-600 text-sm font-semibold">
              Co-applicant verified successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 shadow-lg ${
              showOtpInput
                ? "bg-[#003366] hover:bg-[#E53935]"
                : "bg-[#E53935] hover:bg-[#003366]"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading
              ? showOtpInput
                ? "Verifying..."
                : "Sending OTP..."
              : showOtpInput
              ? "Verify OTP"
              : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoApplicant;