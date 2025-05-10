import React from "react";

const Repay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]">
      {/* Header Section */}/{/* Main Content */}
      <div className="container mx-auto px-4 mt-15 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Loan Summary Card */}
          <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
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
          </div>

          {/* Payment Options */}
          <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Choose Payment Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regular EMI Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Regular EMI Payment
                    </h3>
                    <p className="text-sm text-gray-700">
                      Pay your monthly EMI
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] text-gray-800 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                  Pay EMI Now
                </button>
              </div>

              {/* Full Payment */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Full Payment</h3>
                    <p className="text-sm text-gray-700">
                      Close your loan completely
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] text-gray-800 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                  Pay Full Amount
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Available Payment Methods
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-2">🏦</div>
                <p className="font-bold">Net Banking</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-2">💳</div>
                <p className="font-bold">Credit/Debit Card</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-bold">UPI</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-2">🏧</div>
                <p className="font-bold">NEFT/RTGS</p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Important Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gray-800">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  Early closure of your loan will help you save on interest
                  payments. No prepayment charges will be applicable.
                </p>
              </div>
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gray-800">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  You will receive a loan closure certificate within 7 working
                  days after successful payment.
                </p>
              </div>
              <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gray-800">ℹ️</span>
                </div>
                <p className="text-gray-700">
                  For any assistance, please contact our customer support at
                  1800-XXX-XXXX or email us at support@example.com
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
