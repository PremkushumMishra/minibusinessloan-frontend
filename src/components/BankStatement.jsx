import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_CONFIG from "../config";
// const CUSTOMER_ID = "MBLC0039"; 
import BankVerificationGlobalModal from "../pages/BankVerificationGlobalModal";
// TODO: Make dynamic if needed

import { useStep } from "../context/StepContext";

const BankStatement = () => {
  const { currentStep } = useStep();
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pendingValue, setPendingValue] = useState(null);





  // Fetch options on mount

  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      setError('');
      try {

       
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${API_CONFIG.BASE_URL}/sourcing/get-statement-options`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        if (
          response.data?.status === true &&
          response.data?.message === "SUCCESS"
        ) {
          setOptions(response.data.data);
        } else {
          setOptions([]);
          setError("Failed to fetch statement options.");
        }
      } catch {
        setOptions([]);
        setError("Network error. Please try again.");
      }
      setLoading(false);
    };
    fetchOptions();
  }, []);

  console.log("options >>>> ", options);

  const handleContinue = async () => {
    if (!pendingValue) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {

      const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.get(
            // "http://10.6.3.90:3000/api/v1/get/user/details/web",
            `${API_CONFIG.BASE_URL}/get/user/details/web`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              // withCredentials: true, // If you want to send cookies
            }
          );
          console.log("User Details API Response:", response.data);
          
        } catch (err) {
          console.error("User Details API Error:", err);
        }
      };

      fetchUserDetails();

      const token = localStorage.getItem("authToken");
      const fileNo = response.data.CUSTOMER_ID;
      console.log('fileNo:', fileNo);
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/initiate-bank-statement`,
        {
          fileNo: fileNo,
          bank: "",
          defaultScreen: pendingValue.code,
          accountType: "Saving"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.data?.status === true && response.data?.message === "SUCCESS") {
        if (response.data?.data?.tempUrl) {
          <BankVerificationGlobalModal visible={true} onClose={() => {}} />
          window.open(response.data.data.tempUrl, '_blank');
          return;
        }
        setSuccess("Bank statement process initiated successfully.");
      } else {
        setError(response.data?.message || "Failed to initiate bank statement process.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

useEffect(() => {
  if (currentStep !== "bank-statement") {
    // Redirect to the correct step/page
    navigate(`/${currentStep}`);
  }
}, [currentStep, navigate]);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100 py-8 px-2">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8 animate-bounce-in">
          <span className="text-4xl md:text-5xl drop-shadow-xl mb-1 block">📄</span>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight mb-1 font-sans">Borrower Bank Statement</h1>
          <span className="text-sm font-medium text-blue-500">Please Provide Bank Statement For At Least 6 Months.</span>
          <div className="w-12 h-1 mx-auto my-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 rounded-full opacity-60"></div>
          <div className="mt-1 text-base md:text-lg text-gray-700 font-medium">Select Bank Statement Method</div>
        </div>
        <div className="p-5">
          {error && (
            <p className="text-red-600 text-xs font-semibold mb-2 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-xs font-semibold mb-2 text-center">{success}</p>
          )}
          <div className="flex flex-row gap-4 justify-center items-stretch w-full">
            {loading && (
              <div className="text-center text-blue-600 font-medium py-2 text-sm">Loading...</div>
            )}
            {!loading && options.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-200 shadow-sm bg-white hover:border-blue-500 hover:shadow-md border-gray-200"
                onClick={() => setPendingValue(item)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.serviceType === "Account Aggregator" ? "🔗" : item.serviceType === "Net Banking" ? "🏛️" : "📄"}</span>
                  <span className="font-medium text-base">{item.serviceType}</span>
                </div>
              </div>
            ))}
          </div>
          {pendingValue && (
            <button
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-bold text-base shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 glow-btn"
              onClick={handleContinue}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Continue'}
            </button>
          )}
        </div>
      </div>
      <style>{`
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8) translateY(40px); }
          60% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          80% { transform: scale(0.98) translateY(2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .glow-btn {
          box-shadow: 0 0 16px 2px #a78bfa66, 0 2px 8px 0 #60a5fa33;
        }
      `}</style>
    </div>
  );
};

export default BankStatement;