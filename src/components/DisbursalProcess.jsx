import React from 'react';

const DisbursalProcess = () => {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-4 max-w-md mx-auto mt-8 border border-gray-200">
      {/* Icon */}
      <div className="flex-shrink-0 mr-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100">
          {/* Refresh/processing icon */}
          <svg
            className="h-6 w-6 text-blue-600 animate-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582M20 20v-5h-.581M5.635 19A9 9 0 1 1 19 5.635"
            />
          </svg>
        </div>
      </div>
      {/* Text */}
      <div>
        <div className="font-semibold text-gray-800 text-base">
          Disbursal Under Process
        </div>
        <div className="text-gray-600 text-sm mt-1">
          Verifying bank account details. You can expect loan disbursement within 30 minutes.
        </div>
      </div>
    </div>
  );
};

export default DisbursalProcess;