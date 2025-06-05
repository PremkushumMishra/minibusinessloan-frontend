import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_CONFIG from "../config";
import { fetchUserDetails } from "../utils/api";
import { StepContext } from "../context/StepContext";

const KycProcess = () => {
  const [kycComplete, setKycComplete] = useState(false);
  const [error, setError] = useState(null);
  const [isVerifying, setIsVerifying] = useState(true);
  const [clientId] = useState(localStorage.getItem("digilocker_client_id"));
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const intervalRef = React.useRef(null);
  const navigate = useNavigate();
  const { updateStep } = useContext(StepContext);

  // Fetch user details once on mount
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      // skipNavigate: true, taki navigation na ho
      const userDetails = await fetchUserDetails(token, { skipNavigate: true });
      setPhone(userDetails.phoneNumber);
    };
    getUser();
  }, []);

  const processKyc = useCallback(async () => {
    if (kycComplete || !clientId || !phone) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const step = localStorage.getItem("user_step");
      
      if (step !== "kyc-process") {
        setError("Invalid step for KYC process");
        return;
      }

      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/process-digilocker-data`,
        {
          digilocker_client_id: clientId,
          customerNumber: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.data?.status === true && 
          response.data.message === "SUCCESS" && 
          response.data.data === "SUCCESS") {
        setKycComplete(true);
        setIsVerifying(false);
        updateStep("additional-info");
        // updateStep("kyc-process");
        await fetchUserDetails(token, { navigate });
        navigate("/additional-info");
      } else {
        setError(response.data?.message || "KYC verification failed");
      }
    } catch (error) {
      console.error("KYC process error:", error);
      setError("Error processing KYC verification");
    } finally {
      setLoading(false);
    }
  }, [clientId, phone, kycComplete, navigate]);

  useEffect(() => {
    if (!phone || !isVerifying || !clientId || kycComplete) return;

    // Purana interval clear karo (agar hai to)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Naya interval set karo
    intervalRef.current = setInterval(() => {
      if (!loading && !kycComplete) {
        processKyc();
      }
    }, 30000);

    // Cleanup on unmount or dependency change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [phone, isVerifying, clientId, kycComplete, loading, processKyc]);

  return (
    <div className="min-h-screen bg-[#0D4183] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-t-3xl rounded-bl-3xl shadow-xl p-8 mt-2">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-poppins text-gray-800 mb-4">
            KYC Verification in Progress
          </h2>
          <p className="text-gray-600 text-lg">
            Please wait while we verify your details
          </p>
        </div>

        {/* Loading Animation or Success */}
        <div className="flex justify-center mb-8">
          {!kycComplete ? (
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-4 border-t-[#E0BCF3] border-r-[#7EE7EE] border-b-[#E0BCF3] border-l-[#7EE7EE] rounded-full animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-4 border-4 border-t-[#7EE7EE] border-r-[#E0BCF3] border-b-[#7EE7EE] border-l-[#E0BCF3] rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 border-4 border-[#E0BCF3] rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
              <div className="absolute inset-[38%] bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full animate-[ping_1s_ease-in-out_infinite]"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-poppins text-green-700">KYC Complete!</h3>
              <p className="text-green-600 mt-2">Your KYC verification is successfully completed.</p>
            </div>
          )}
        </div>

        {/* Status Steps */}
        {!kycComplete && (
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#E0BCF3] flex items-center justify-center text-white font-poppins">1</div>
              <div>
                <h3 className="font-poppins text-gray-800">Document Verification</h3>
                <p className="text-gray-600">Verifying your submitted documents</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#7EE7EE] flex items-center justify-center text-white font-poppins">2</div>
              <div>
                <h3 className="font-poppins text-gray-800">Identity Check</h3>
                <p className="text-gray-600">Validating your identity information</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#E0BCF3] flex items-center justify-center text-white font-poppins">3</div>
              <div>
                <h3 className="font-poppins text-gray-800">Final Verification</h3>
                <p className="text-gray-600">Completing the verification process</p>
              </div>
            </div>
          </div>
        )}

        {/* Important Notice */}
        {!kycComplete && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong className="font-poppins">Important:</strong> Please do not refresh or close this page while the verification is in progress. This may take a few minutes to complete.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="mt-4 text-center text-red-600 font-semibold">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default KycProcess;
