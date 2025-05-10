import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const KycSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/additional-info");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 mt-2 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ConfettiEffect />
      </div>
      <div className="max-w-md w-full bg-white/90 rounded-3xl shadow-2xl p-10 border border-blue-200 flex flex-col items-center animate-fade-in z-10">
        {/* Animated Checkmark */}
        <div className="mb-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 bg-green-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <FaCheckCircle className="h-24 w-24 text-green-500 z-10 animate-glow" />
          </div>
        </div>
        {/* Success Message */}
        <h2 className="text-4xl font-extrabold text-green-700 mb-2 text-center drop-shadow-lg font-sans tracking-tight">
          KYC Verification Successful!
        </h2>
        <p className="text-gray-700 text-lg mb-8 text-center font-medium">
          Thank you for completing your DigiLocker KYC verification.
          <br />
          Your documents have been successfully verified.
        </p>
        {/* Continue Button */}
        <button
          onClick={handleClick}
          className="w-full py-3 px-8 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Continue to Application
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        {/* Additional Info */}
        <p className="mt-8 text-sm text-gray-500 text-center">
          Your loan application is now being processed.
          <br />
          We will contact you shortly with further details.
        </p>
      </div>
      {/* Animations and Confetti Component */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        .animate-glow { animation: glow 2s ease-in-out infinite alternate; }
        @keyframes glow { from { filter: drop-shadow(0 0 0px #22c55e); } to { filter: drop-shadow(0 0 16px #22c55e); } }
      `}</style>
    </div>
  );
};

// Simple Confetti Effect (CSS only, lightweight)
function ConfettiEffect() {
  return (
    <>
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="absolute block w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 80%, 70%)`,
            opacity: 0.7,
            animation: `confetti-fall 2.5s ${
              Math.random() * 2
            }s infinite linear`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-40px) scale(1); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(60vh) scale(0.7); opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default KycSuccess;
