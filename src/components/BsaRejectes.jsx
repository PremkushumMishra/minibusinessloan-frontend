import React from 'react';
import { useNavigate } from 'react-router-dom';

const BsaRejectes = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 p-6">
      {/* Confetti-like subtle background dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #60a5fa 40%, #a78bfa 100%)`,
              filter: 'blur(1.5px)',
            }}
          />
        ))}
      </div>
      <div className="relative z-10 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100 p-10 max-w-md w-full text-center animate-pop-in">
        <div className="flex flex-col items-center mb-4">
          {/* <span className="text-7xl mb-2 drop-shadow-lg">🙂</span> */}
          <svg width="72" height="72" fill="none" viewBox="0 0 24 24" className="mb-3 text-blue-400 drop-shadow-md">
            <circle cx="12" cy="12" r="10" fill="#DBEAFE" />
            <path d="M12 16h.01M9 10h6a3 3 0 01-6 0z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-tight font-sans">We're With You!</h2>
        </div>
        <p className="text-gray-700 mb-5 text-lg leading-relaxed font-sans">
          Thank you for applying with us. At the moment, your current credit profile doesn't match our lending criteria.
          <br/><br/>
          <span className="font-semibold text-blue-700">But this is not the end — just a pause.</span> Many of our customers improve their credit and come back stronger. And so can you!
        </p>
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 text-left mb-7 shadow-md">
          <p className="text-lg text-blue-800 font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span> Here are a few simple steps to help boost your credit score:
          </p>
          <ul className="text-lg text-gray-700 list-none space-y-3 pl-0 font-sans">
            <li className="flex items-start gap-3"><span className="text-xl">⏰</span>Pay your EMIs and credit card bills on time</li>
            <li className="flex items-start gap-3"><span className="text-xl">📉</span>Keep your credit utilization below 30%</li>
            <li className="flex items-start gap-3"><span className="text-xl">🔍</span>Check your credit report regularly for any errors</li>
          </ul>
        </div>
        <p className="text-gray-600 text-lg mb-7 font-sans">
          We're always here to support your financial journey. You can reapply anytime once things improve. <span className="text-2xl">✨</span>
        </p>
        <button
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-3 rounded-2xl font-bold text-lg shadow-xl hover:from-blue-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 glow-btn"
          onClick={() => navigate('/')}
        >
          Back to Dashboard
        </button>
      </div>
      <style>{`
        .animate-pop-in {
          animation: popIn 0.8s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes popIn {
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

export default BsaRejectes;



















