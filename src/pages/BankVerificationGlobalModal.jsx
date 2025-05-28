import React from 'react';

function BankVerificationGlobalModal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative max-w-lg w-full mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Stepper/Progress */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
            <div className="h-1 w-8 bg-blue-300 rounded"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold">2</div>
            <div className="h-1 w-8 bg-blue-200 rounded"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">3</div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-2">Bank Verification Process</h1>
        <p className="text-center text-base text-gray-600 mb-6">Please complete your bank verification to proceed with your application. This helps us ensure your account details are correct and secure.</p>
        {/* Bank Details Card */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow p-4 mb-6 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-700">Bank Name:</span>
            <span className="text-gray-700">HDFC Bank</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-700">Account Number:</span>
            <span className="text-gray-700">XXXXXX1234</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-700">IFSC:</span>
            <span className="text-gray-700">HDFC0001234</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-700">Status:</span>
            <span className="inline-flex items-center px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-semibold">Pending</span>
          </div>
        </div>
        {/* Instructions */}
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1 text-sm">
          <li>Ensure your bank account is active and linked to your mobile number.</li>
          <li>Keep your passbook or bank statement handy for quick reference.</li>
          <li>Verification may require an OTP sent to your registered mobile.</li>
        </ul>
        {/* Call to Action */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 glow-btn">
          Start Verification
        </button>
      </div>
      <style>{`
        .glow-btn {
          box-shadow: 0 0 16px 2px #a78bfa66, 0 2px 8px 0 #60a5fa33;
        }
        .animate-fade-in {
          animation: fadeInModal 0.25s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInModal {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default BankVerificationGlobalModal;
