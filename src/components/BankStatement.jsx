import React, { useState } from 'react';
import axios from 'axios';
import API_CONFIG from "../config";
const CUSTOMER_ID = "TABL004"; // TODO: Make dynamic if needed

const BankStatement = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pendingValue, setPendingValue] = useState('');

  const fetchOptions = async () => {
    if (options.length > 0) return;
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
      console.log('Bank statement options API response:', response);
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS" &&
        Array.isArray(response.data?.data)
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

  const handleSelect = (e) => {
    const value = e.target.value;
    setPendingValue(value);
    setSuccess('');
    setError('');
  };

  const handleContinue = async () => {
    if (!pendingValue) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/initiate-bank-statement`,
        {
          fileNo: CUSTOMER_ID,
          bank: "",
          defaultScreen: pendingValue,
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
      console.log('Initiate bank statement API response:', response);
      if (response.data?.status === true && response.data?.message === "SUCCESS") {
        if (response.data?.data?.tempUrl) {
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100 py-16 px-2">
      <div className="max-w-lg w-full mx-auto">
        <div className="text-center mb-12 animate-bounce-in">
          <span className="text-7xl md:text-8xl drop-shadow-xl mb-2 block">📄</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-2 font-sans">Upload Your Bank Statement</h1>
          <span className="text-lg font-semibold text-blue-500">(last 6 months)</span>
          <div className="w-16 h-1 mx-auto my-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 rounded-full opacity-60"></div>
          <div className="mt-2 text-lg md:text-xl text-gray-700 font-medium">Select your preferred method to continue</div>
        </div>
        <div className="p-10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100">
          <label className="block text-lg font-bold mb-4 text-[#003366] text-center">
            Select Bank Statement Method
          </label>
          <div className="relative">
            <select
              className="w-full px-5 py-3 rounded-lg border border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white text-gray-800 text-base appearance-none shadow-sm"
              value={pendingValue}
              onChange={handleSelect}
              onClick={() => {
                if (!isDropdownClicked) {
                  fetchOptions();
                  setIsDropdownClicked(true);
                }
              }}
            >
              <option value="">Choose Method</option>
              {loading && <option disabled>Loading...</option>}
              {options.map((opt) => (
                <option key={opt.id} value={opt.code}>{opt.serviceType}</option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-blue-600">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          {error && (
            <p className="text-red-600 text-sm font-semibold mt-2 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm font-semibold mt-2 text-center">{success}</p>
          )}
          {pendingValue && (
            <button
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-3 rounded-2xl font-bold text-lg shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 glow-btn"
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