import React from 'react';

const CamProcess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center p-8 max-w-md">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Clock Animation */}
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-8 bg-blue-500 origin-bottom transform -translate-y-1 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-12 bg-purple-500 origin-bottom transform -translate-y-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-in">
          Final CAM Approval is Under Process
        </h1>
        
        <p className="text-gray-600 mb-6 animate-fade-in-delay">
          Please wait while we process your application. This may take a few moments.
        </p>

        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
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
      `}</style>
    </div>
  );
};

export default CamProcess;
