import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [days, setDays] = useState(30);
  const interestRate = 20; // 20% flat interest

  const totalInterest = (loanAmount * interestRate) / 100;
  const payableAmount = loanAmount + totalInterest;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-[40vh] flex items-center justify-center mt-10 bg-white py-4">
      <div className="w-full max-w-6xl mx-auto px-1">
        <motion.div 
          className="flex flex-col md:flex-row bg-[#E8E8E8] rounded-3xl shadow-xl overflow-hidden md:h-[480px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side */}
          <motion.div 
            className="flex-1 flex flex-col justify-center gap-3 px-4 py-6 h-full"
            variants={itemVariants}
          >
            <motion.h2
              className="mb-1"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '140%',
                letterSpacing: 0,
                color: '#045382',
              }}
              variants={itemVariants}
            >
              EMI Calculator
            </motion.h2>
            <motion.div className="mb-1" variants={itemVariants}>
              <label className="flex justify-between font-poppins font-medium text-[#003366] mb-1 text-sm md:text-base">
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
                className="w-full max-w-lg h-12 px-3 py-1 border border-[#003366] rounded-lg text-[#003366] font-semibold text-base focus:outline-none focus:ring-2 focus:ring-[#505050] bg-[#F0F0F0] mb-1"
              />
              <input
                type="range"
                min="5000"
                max="500000"
                step="1"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full max-w-lg accent-[#505050] h-1 bg-gray-200 rounded-lg"
              />
            </motion.div>

            <motion.div className="mb-1" variants={itemVariants}>
              <label className="flex justify-between font-poppins font-medium text-[#003366] mb-1 text-sm md:text-base">
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
                className="w-full max-w-lg px-3 py-2 h-12 border border-[#003366] rounded-lg text-[#003366] font-semibold text-base focus:outline-none focus:ring-2 focus:ring-[#E53935] bg-[#F0F0F0] mb-1"
              />
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full max-w-lg accent-[#505050] h-1 bg-gray-200 rounded-lg"
              />
            </motion.div>

            <motion.div className="mb-1" variants={itemVariants}>
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
                <span className="font-bold ml-2" style={{ color: '#505050' }}>
                  {/* 20% per month (fixed) */}
                </span>
              </label>
              <div className="flex flex-row items-center justify-between gap-4 mt-6 mb-2 w-full">
                {/* Left side: summary */}
                <motion.div 
                  className="flex flex-col gap-2"
                  variants={itemVariants}
                >
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
                </motion.div>
                {/* Right side: Apply Now button with double circle */}
                <motion.div 
                  className="relative flex items-center justify-center ml-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Back circle */}
                  <motion.div 
                    className="absolute -left-13 top-3 w-20 h-20 md:w-26 md:h-25 bg-[#1575E5CC] rounded-full z-0"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Front circle with button */}
                  <Link to="/mobile-verification">
                    <motion.button
                      className="relative w-20 h-20 md:w-26 md:h-26 bg-[#045382] rounded-full flex items-center -left-12 justify-center text-white font-medium z-10 shadow-lg text-sm md:text-base"
                      style={{ fontFamily: 'Poppins' }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(4, 83, 130, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex-1 h-full"
            variants={imageVariants}
          >
            <img
              src="/Callculator.png"
              alt="Shopkeeper with loan approval"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoanCalculator;
