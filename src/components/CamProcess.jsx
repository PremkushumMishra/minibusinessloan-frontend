import React, { useState, useEffect } from 'react';

const TOTAL_SECONDS = 15 * 60; // 15 minutes

const CamProcess = () => {
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    // Check for existing start time in localStorage
    let startTime = localStorage.getItem('camProcessStartTime');
    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem('camProcessStartTime', startTime);
    } else {
      startTime = parseInt(startTime, 10);
    }
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      const remaining = TOTAL_SECONDS - elapsed;
      setTimeLeft(remaining > 0 ? remaining : 0);
      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Optional: Animated gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg- animate-gradient-move"></div>
      </div>
      <div className="z-10 w-full max-w-md">
        <div className="bg-blue-700 rounded-t-3xl rounded-bl-3xl shadow-2xl p-8 text-center">
          {/* Animated Circular Progress Bar with Timer */}
          <div className="relative w-35 h-35 mx-auto mb-8 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-blue-300"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className="text-white transition-all duration-1000"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - timeLeft / TOTAL_SECONDS)}
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>
            <span className="text-4xl font-mono font-poppins text-white animate-pulse-slow z-10">
              {formatTime(timeLeft)}
            </span>
          </div>
          <h1 className="text-2xl font-poppins text-white mb-4 animate-fade-in">
            We have received your loan application.
            Our Credit team will contact you shortly to further process your application.
          </h1>
          <p className="text-blue-100 mb-6 animate-fade-in-delay">
            Please wait while we process your application. This may take 15 minutes.
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-7 h-5 bg-white rounded-t-xl rounded-bl-xl animate-bounce"></div>
            <div className="w-7 h-5 bg-blue-200 rounded-t-xl rounded-bl-xl animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-7 h-5 bg-white rounded-t-xl rounded-bl-xl animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.5s ease-in 0.3s both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1);}
          50% { opacity: 0.85; transform: scale(1.08);}
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CamProcess;
