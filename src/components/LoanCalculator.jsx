import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [days, setDays] = useState(30);
  const interestRate = 20; // 20% flat interest

  const totalInterest = (loanAmount * interestRate) / 100;
  const payableAmount = loanAmount + totalInterest;

  return (
    <div className="min-h-[40vh] flex items-center justify-center mt-10 bg-white py-4">
<div className="w-full max-w-6xl mx-auto px-1">
<div className="flex flex-col md:flex-row bg-[#E8E8E8] rounded-3xl shadow-xl overflow-hidden md:h-[480px]">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center gap-3 px-4 py-6 h-full">
            <h2
              className="mb-1"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '140%',
                letterSpacing: 0,
                color: '#045382',
              }}
            >
              EMI Calculator
            </h2>
            <div className="mb-1">
              <label className="flex justify-between font-medium text-[#003366] mb-1 text-sm md:text-base">
                Loan Amount
                <span className="font-bold text-[#E53935] ml-2">
                  {/* ₹{loanAmount.toLocaleString()} */}
                </span>
              </label>
              <input
                type="number"
                min="5000"
                max="500000"
                step="1"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(e.target.value === "" ? "" : Number(e.target.value));
                }}
                onBlur={(e) => {
                  let val = Number(e.target.value);
                  if (val < 5000) {
                    setLoanAmount(5000);
                    toast.error("Please enter minimum 5000");
                  } else if (val > 500000) {
                    setLoanAmount(500000);
                  } else {
                    setLoanAmount(val);
                  }
                }}
                className="w-full max-w-md h-12 px-3 py-1 border border-[#003366] rounded-lg text-[#003366] font-semibold text-base focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F0F0F0] mb-1"
              />
              <input
                type="range"
                min="5000"
                max="500000"
                step="1"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full max-w-md accent-[#505050] h-1 bg-gray-200 rounded-lg"
              />
            </div>

            <div className="mb-1">
              <label className="flex justify-between font-medium text-[#003366] mb-1 text-sm md:text-base">
                Number of Days
                <span className="font-bold text-[#505050] ml-2"></span>
              </label>
              <input
                type="number"
                min="1"
                max="100"
                step="1"
                value={days}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val < 1) val = 1;
                  if (val > 100) val = 100;
                  setDays(val);
                }}
                className="w-full max-w-md px-3 py-2 h-12 border border-[#003366] rounded-lg text-[#003366] font-semibold text-base focus:outline-none focus:ring-2 focus:ring-[#E53935] bg-[#F0F0F0] mb-1"
              />
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full max-w-md accent-[#505050] h-1 bg-gray-200 rounded-lg"
              />
            </div>

            <div className="mb-1">
              <label
                className="flex font-medium mb-1 mt-1 ml-3 text-sm md:text-base"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '140%',
                  letterSpacing: 0,
                  color: '#505050',
                }}
              >
                {/* Interest Rate: */}
                <span className="font-bold ml-2" style={{ color: '#505050' }}>
                  {/* 20% per month (fixed) */}
                </span>
              </label>
              <div className="flex flex-row items-center justify-between gap-4 mt-6 mb-2 w-full">
                {/* Left side: summary */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row font-medium whitespace-nowrap" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '140%', letterSpacing: 0, color: '#505050' }}>
                    <span>Interest Rate:</span>
                    <span className="ml-2 font-bold" style={{ color: '#505050' }}>
                      20%
                    </span>
                  </div>
                  <div className="flex flex-row font-medium whitespace-nowrap" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '140%', letterSpacing: 0, color: '#505050' }}>
                    <span>Total Payable:</span>
                    <span className="ml-2 font-bold" style={{ color: '#505050' }}>
                      ₹{payableAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-row font-medium whitespace-nowrap" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '140%', letterSpacing: 0, color: '#505050' }}>
                    <span>Total Interest:</span>
                    <span className="ml-2 font-bold" style={{ color: '#505050' }}>
                      ₹{totalInterest.toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* Right side: Apply Now button with double circle */}
                <div className="relative flex items-center justify-center ml-2">
                  {/* Back circle */}
                  <div className="absolute -left-3 top-3 w-20 h-20 md:w-26 md:h-26 bg-[#1575E5CC] rounded-full z-0 animate-pulse-custom"></div>
                  {/* Front circle with button */}
                  <Link to="/mobile-verification">
                    <button
                      className="relative w-20 h-20 md:w-26 md:h-26 bg-[#045382] rounded-full flex items-center justify-center text-white font-medium z-10 shadow-lg text-sm md:text-base transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-2xl active:scale-95"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 h-full">
            <img
              src="/Callculator.png"
              alt="Shopkeeper with loan approval"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoanCalculator;
