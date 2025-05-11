import React from "react";

const Repay = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      {/* Header Section */}/{/* Main Content */}
      <div className="container mx-auto px-4 mt-15 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Loan Summary Card */}
          {/* <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Loan Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700">Total Loan Amount</p>
                <p className="text-2xl font-bold text-gray-800">₹2,00,000</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700">Remaining Amount</p>
                <p className="text-2xl font-bold text-gray-800">₹1,50,000</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700">Monthly EMI</p>
                <p className="text-2xl font-bold text-gray-800">₹5,000</p>
                <p className="text-sm text-gray-600">Due on 15th every month</p>
              </div>
            </div>
          </div> */}

          {/* Payment Options */}
          <div className="bg-gradient-to-r from-[#003366] to-[#E53935] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">
              Choose Payment Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Daily Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Daily Payment</h3>
                    <p className="text-sm text-gray-700">Pay your daily installment</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay Daily
                </button>
              </div>

              {/* Weekly Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Weekly Payment</h3>
                    <p className="text-sm text-gray-700">Pay your weekly installment</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay Weekly
                </button>
              </div>

              {/* Regular EMI Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Pre Payment</h3>
                    <p className="text-sm text-gray-700">Pay your EMI in advance</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay in Advance
                </button>
              </div>

              {/* Renewal or Top Up */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Renewal or Top Up</h3>
                    <p className="text-sm text-gray-700">Renew your loan or increase limit</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Renew/Top Up
                </button>
              </div>

              {/* Early Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Early Payment</h3>
                    <p className="text-sm text-gray-700">Pay before due date</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay Early
                </button>
              </div>

              {/* Loan for Closure */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#E53935]">Loan for Closure</h3>
                    <p className="text-sm text-gray-700">Close your loan account with a single payment</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Close Loan
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gradient-to-r from-[#003366] to-[#E53935] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">
              Available Payment Methods
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Net Banking */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-2 text-[#003366]">🏦</div>
                <p className="font-bold text-[#003366]">Net Banking</p>
              </div>
              {/* UPI with real logo */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-2">
                  <img src="/upipic.png" alt="UPI" className="h-8" />
                </div>
                <p className="font-bold text-[#003366]">UPI</p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-r from-[#003366] to-[#E53935] rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">
              Important Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#003366]">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  Early closure of your loan will help you save on interest
                  payments. No prepayment charges will be applicable.
                </p>
              </div>
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#E53935]">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  You will receive a loan closure certificate within 7 working
                  days after successful payment.
                </p>
              </div>
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#003366]">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  For any assistance, please contact our customer support at
                  1800-XXX-XXXX or email us at info@minibusinessloanloan.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repay;
