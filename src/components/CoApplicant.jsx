import React, { useState, useEffect , useContext} from "react";
import axios from "axios";
import API_CONFIG from "../config";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../utils/api";
import { StepContext } from "../context/StepContext";

const CoApplicant = () => {
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [customerID, setCustomerID] = useState(null);
  const navigate = useNavigate();
  const { updateStep } = useContext(StepContext);

  // PAN validation: 5 letters, 4 digits, 1 letter
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
  const isMobileValid = /^\d{10}$/.test(mobile);
  const isPanValid = panRegex.test(pan);

  // Fetch user details on component mount
  useEffect(() => {
    const initializeUserDetails = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError("Authentication token not found");
          return;
        }
        const data = await fetchUserDetails(token, { skipNavigate: true });
        if (data) {
          setMobile(data.phoneNumber || "");
          setCustomerID(data.customerID || "");
        }
        console.log("User details fetched successfully:", data);
      } catch {
        setError("Failed to fetch user details");
      }
    };
    initializeUserDetails();
  }, []);

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
      return;
    }
    
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      console.log("Mobile being sent to API (Send OTP):", mobile);

      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/send-otp-co-applicant`,
        {
          phone: mobile,
          pan: pan,
          customerID: customerID,
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

      if (response.data?.status === true && response.data?.message === "SUCCESS") {
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
      setError(err.response?.data?.message || "Network error. Please try again.");
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
    
    if (!customerID || customerID.length <= 6) {
      setError("CustomerID is missing or invalid.");
      return;
    }
    
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Authentication token not found");
      }
      const clientId = localStorage.getItem('clientId');
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/verify-otp-co-applicant`,
        {
          phone: mobile,
          otp: otp,
          customerID: customerID,
          client_id: clientId,
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
      if (response.data?.status === true && response.data?.message === "SUCCESS") {
        setStatus("success");
        try {
          updateStep("applicant-business-details");
          // Fetch user details after successful OTP verification
          const userDetails = await fetchUserDetails(token, navigate);
          console.log("customerID co-aplicant:", userDetails.customerID);
          console.log("User details fetched successfully after OTP verification");
        } catch (error) {
          console.error("Error fetching user details after OTP verification:", error);
        }
        setTimeout(() => {
          navigate("/applicant-business-details");
        }, 1000);
      } else if (response.data?.status === false && response.data?.message === "Lead Rejected") {
        navigate("/applicant-business-details");
      } else {
        setStatus("error");
        setError(response.data?.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setError(err.response?.data?.message || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D4183] py-12 px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-t-3xl rounded-bl-3xl shadow-xl p-8 mt-2">
        <h2 className="text-2xl font-poppins text-center text-[#003366] mb-6">
          Co-Applicant Verification
        </h2>
        
        {/* Show customerID for debugging (remove in production) */}
        {customerID && (
          <p className="text-xs text-gray-500 mb-4 text-center">
            {/* Customer ID: {customerID} */}
          </p>
        )}
        
        <form
          onSubmit={showOtpInput ? handleVerifyOtp : handleSendOtp}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-poppins text-gray-700 mb-2">
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
            <label className="block text-sm font-poppins text-gray-700 mb-2">
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
              <label className="block text-sm font-poppins text-gray-700 mb-2">
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
            className={`w-full py-3 rounded-t-2xl rounded-bl-2xl font-poppins text-white transition-all duration-300 shadow-lg ${
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