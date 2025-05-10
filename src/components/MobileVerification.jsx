import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/StepContext";
import axios from "axios";
import API_CONFIG from "../config";

const TERMS_CONTENT = (
  <div className="max-h-[60vh] overflow-y-auto px-2 py-4 bg-[#003366] border-l-8 border-[#E53935] rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-[#E53935] mb-4">
      Terms and Conditions
    </h2>
    <p className="text-[#E53935] font-bold mb-3">
      PLEASE READ THESE TERMS CAREFULLY.
    </p>
    <p className="mb-3 text-white">
      By applying for a TechAvom Business Loan, you agree to the following terms:
    </p>
    <p className="mb-3 text-white font-semibold">
      Loan amount ranges from <span className="text-[#E53935] font-bold">₹5,000</span> to <span className="text-[#E53935] font-bold">₹10,00,000</span>.
    </p>
    <ul className="list-disc pl-6 mb-3 text-white space-y-2 marker:text-[#003366]">
      <li>
        <span className="font-semibold text-[#E53935]">Loan Tenure:</span> The business loan is
        provided for a flexible tenure from <span className="text-[#E53935] font-bold">7 days</span> to <span className="text-[#E53935] font-bold">120 days</span>. Early repayment is allowed
        without penalty.
      </li>
      <li>
        <span className="font-semibold text-[#E53935]">Processing Time:</span> Loan approval
        and disbursal are typically completed within 30 minutes, subject to
        successful KYC and credit checks.
      </li>
      <li>
        <span className="font-semibold text-[#E53935]">Eligibility:</span> You must provide
        accurate business and personal information. False or misleading
        information may result in rejection or legal action.
      </li>
      <li>
        <span className="font-semibold text-[#E53935]">Repayment:</span> Timely repayment is
        required. Late payments may incur additional charges and affect your
        credit profile.
      </li>
      <li>
        <span className="font-semibold text-[#E53935]">Privacy:</span> Your data will be used
        solely for loan processing and will be kept confidential as per our
        Privacy Policy.
      </li>
      <li>
        <span className="font-semibold text-[#E53935]">Agreement:</span> By clicking <span className="text-[#E53935] font-bold">"Agree"</span>
        you confirm you have read, understood, and accept these terms.
      </li>
    </ul>
    <div className="border-t-2 border-[#E53935] my-4"></div>
    <p className="text-white">
      If you do not agree with any part of these terms, please do not proceed
      with the loan application.
    </p>
  </div>
);

const MobileVerification = () => {
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate();
  const { updateStep } = useStep();
  const [clientId, setClientId] = useState("");

  // API Configuration - Just change these URLs when switching APIs
  const API_CONFIG = {
    BASE_URL: "http://10.6.3.57:3000/api/v1",
    ENDPOINTS: {
      SEND_OTP: "/send-otp",
      VERIFY_OTP: "/verify-otp",
      RESEND_OTP: "/resend-otp",
    },
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Always keep +91 prefix
    if (!value.startsWith("+91")) {
      setMobileNumber("+91");
      return;
    }

    // Get the number part after +91
    const numberPart = value.slice(3);

    // Only allow digits
    if (!/^\d*$/.test(numberPart)) {
      return;
    }

    // Limit to 10 digits after +91
    if (numberPart.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 13) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try {
      // Send OTP using axios to the new API endpoint
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      const response = await axios.post(
        // 'http://10.6.3.135:3000/api/v1/auth/generate-otp-customer',
        `${API_CONFIG.BASE_URL}/auth/generate-otp-customer`,
        {
          phone: mobileNumberWithoutPrefix,
          appliedMode: "web",
          sourceBy: "null",
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("API Response:", response.data);

      // You can check response.data for success or error
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        // receive client_id
        const receivedClientId = response.data?.data?.client_id;
        setClientId(receivedClientId);
        setShowOtpInput(true);
        alert("OTP sent successfully!");
      } else {
        alert(response.data.message || "Failed to send OTP");
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
      alert("Please enter a valid 4 or 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      // const client_id = "your_client_id_here";
      const response = await axios.post(
        "http://10.6.3.57:3000/api/v1/auth/verify-otp-customer",
        // `${API_CONFIG.BASE_URL}/auth/verify-otp-customer`,
        { phone: mobileNumberWithoutPrefix, otp:otp, client_id: clientId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("OTP verify response:", response.data);

      // if (response.data && response.data.status) {
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        // ✅ Save the JWT token in localStorage
        const token = response.data.data;
        console.log("✅ Received token from OTP verify:", token); // 👈 Debug line

        localStorage.setItem("authToken", `${token}`);
        // localStorage.setItem("authToken", `Bearer ${token}`);

        setVerificationStatus("success");
        alert("OTP Verified Successfully!");

        setTimeout(() => {
          updateStep("aadhaar-verification");
          navigate(
            `/name-email-verify?mobileNumber=${mobileNumberWithoutPrefix}`
          );
        }, 1000);
      } else {
        setVerificationStatus("error");
        alert(response.data.message || "Invalid OTP");
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
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      const response = await axios.post(
        "http://10.6.3.57:3000/api/v1/auth/generate-otp-customer",
        // `${API_CONFIG.BASE_URL}/auth/generate-otp-customer`,
        { phone: mobileNumberWithoutPrefix, appliedMode: "web" },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("OTP resend response:", response.data);
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        alert("OTP resent successfully!");
      } else {
        alert(response.data.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error("Error resending OTP:", err);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#003366] flex items-center justify-center py-8 px-2  sm:px-4">
      <div className="w-full max-w-sm space-y-5 bg-white p-3 sm:p-5 sm:mt-10 rounded-3xl shadow-2xl border-2 border-[#003366]">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-3xl text-[#E53935]">📱</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#003366]">
            Mobile Verification
          </h2>
          <p className="mt-3 text-[#003366] text-lg font-medium">
            Please verify your mobile number to continue
          </p>
        </div>

        {!showOtpInput ? (
          // Mobile Number Input Form
          <form className="mt-8 space-y-6" onSubmit={handleMobileSubmit}>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mobile Number
              </label>
              <div className="relative group">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  className="appearance-none block w-full px-4 py-4 border-2 border-[#003366] rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all duration-200 text-lg font-medium tracking-wider group-hover:border-[#E53935]"
                  placeholder="+91"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <span className="text-2xl text-purple-400 group-hover:text-purple-500 transition-colors duration-200">
                    📱
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                {mobileNumber.length - 3}/10 digits entered
              </p>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-medium text-gray-700 cursor-pointer"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-purple-600 hover:text-purple-500 font-semibold underline focus:outline-none"
                    onClick={() => setShowTermsModal(true)}
                  >
                    Terms and Conditions
                  </button>
                </label>
              </div>
            </div>

            {/* Terms Modal */}
            {showTermsModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in">
                  <h3 className="text-xl font-bold mb-2">
                    Terms and Conditions
                  </h3>
                  <div className="border-t border-gray-200 mb-4"></div>
                  {TERMS_CONTENT}
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      className="px-5 py-2 rounded-lg text-white font-semibold bg-[#003366] hover:bg-[#002244] border border-[#003366] transition"
                      onClick={() => setShowTermsModal(false)}
                    >
                      Decline
                    </button>
                    <button
                      className="px-5 py-2 rounded-lg bg-[#E53935] text-white font-bold hover:bg-[#c62828] transition shadow"
                      onClick={() => {
                        setAcceptedTerms(true);
                        setShowTermsModal(false);
                      }}
                    >
                      Agree
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={
                  isLoading || mobileNumber.length !== 13 || !acceptedTerms
                }
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-[#003366] to-[#E53935] hover:from-[#002244] hover:to-[#b71c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935] transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                  isLoading || mobileNumber.length !== 13 || !acceptedTerms
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
                  className="appearance-none block w-full px-4 py-4 border-2 border-[#003366] rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all duration-200 text-center tracking-[0.5em] text-2xl font-semibold group-hover:border-[#E53935]"
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
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-[#003366] to-[#E53935] hover:from-[#002244] hover:to-[#b71c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935] transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
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
                  Your mobile number has been verified successfully.
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
              style={{ color: '#003366' }}
            >
              <span>←</span>
              <span>Back to Mobile Number</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileVerification;
