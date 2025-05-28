import React, { useState } from "react";
import axios from "axios";
import API_CONFIG from "../config";
import { useNavigate } from "react-router-dom";

const CoApplicant = () => {
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [error, setError] = useState("");
  let customerID = null;

  const navigate = useNavigate();

  // PAN validation: 5 letters, 4 digits, 1 letter
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;

  const isMobileValid = /^\d{10}$/.test(mobile);
  const isPanValid = panRegex.test(pan);

  const fetchUserDetails = async () => {
    console.log("fetching user details", fetchUserDetails);
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
      console.log("User Details API Response:", response.data);
      if (response.data?.customerID) {
        customerID = response.data.customerID;
      }
    } catch (err) {
      console.error("User Details API Error:", err);
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
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);

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
      console.log(response, "co-applicant response");

      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        console.log(response.data, "response.data");

        if (response.data?.customerID && response.data.customerID.length > 6) {
          customerID = response.data.customerID;
        }
        setShowOtpInput(true);
        setStatus(null);
        alert("OTP sent to co-applicant mobile number!");
        fetchUserDetails();
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
    if (!customerID || customerID.length <= 6) {
      setError("CustomerID is missing or invalid.");
      return;
    }
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/verify-otp-co-applicant`,
        {
          phone: mobile,
          otp: otp,
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
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        setStatus("success");
        fetchUserDetails();
        console.log("✅ OTP verified successfully! Navigating to business details..======>>.",
          response.data
        );
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E0BCF3] to-[#7EE7EE] py-12 px-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mt-20">
        <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">
          Co-Applicant Verification
        </h2>
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
