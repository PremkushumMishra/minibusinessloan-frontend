import React from "react";
import Razorpay from "../components/Razorpay";

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-[#003366]">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
      {children}
    </div>
  </div>
);

const Repay = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-4xl mx-auto">
          {/* Important Information Section */}
          <div className="mb-10 rounded-2xl shadow-lg bg-gradient-to-r from-[#203A67] to-[#E53935] p-2 sm:p-6 overflow-hidden">
            <h2 className="text-white text-2xl sm:text-3xl mt-2 text-center mb-6 font-poppins">
              Important Information
            </h2>
            <div className="space-y-5">
              {/* Card 1 */}
              <div className="flex items-start bg-[#e9eef3] rounded-xl p-4 sm:p-6 w-full mx-auto">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #203A67 60%, #E53935 100%)",
                  }}
                >
                  <span className="text-white text-xl font-bold">i</span>
                </div>
                <div className="text-[#203A67] text-base sm:text-lg font-poppins">
                  Early closure of your loan will help you save on interest
                  payments. No prepayment charges will be applicable.
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex items-start bg-[#e9eef3] rounded-xl p-4 sm:p-6 w-full mx-auto">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #203A67 60%, #E53935 100%)",
                  }}
                >
                  <span className="text-white text-xl font-bold">i</span>
                </div>
                <div className="text-[#203A67] text-base sm:text-lg font-poppins">
                  You will receive a loan closure certificate within 7 working
                  days after successful payment.
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex items-start bg-[#e9eef3] rounded-xl p-4 sm:p-6 w-full mx-auto">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #203A67 60%, #E53935 100%)",
                  }}
                >
                  <span className="text-white text-xl font-bold">i</span>
                </div>
                <div className="text-[#203A67] text-base sm:text-lg font-poppins">
                  For any assistance, please contact our customer support at
                  1800-XXX-XXXX or email us at info@minibusinessloan.com
                </div>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-to-blac rounded-lg  p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-black mb-6">
              Choose Payment Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Daily Payment */}
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] bg-red">
                      Daily Payment
                    </h3>
                    <p className="text-sm text-gray-700">
                      Pay your daily installment
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay Daily
                </button>
              </div>

              {/* Weekly Payment */}
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] bg-red">
                      Weekly Payment
                    </h3>
                    <p className="text-sm text-gray-700">
                      Pay your weekly installment
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay Weekly
                </button>
              </div>

              {/* Regular EMI Payment */}
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">₹</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">Pre Payment</h3>
                    <p className="text-sm text-gray-700">
                      Pay your EMI in advance
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Pay in Advance
                </button>
              </div>

              {/* Renewal or Top Up */}
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">
                      Renewal or Top Up
                    </h3>
                    <p className="text-sm text-gray-700">
                      Renew your loan or increase limit
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Renew/Top Up
                </button>
              </div>

              {/* Early Payment */}
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
              <div className="bg-gray-200 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366]">
                      Loan for Closure
                    </h3>
                    <p className="text-sm text-gray-700">
                      Close your loan account with a single payment
                    </p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-2 rounded-lg font-bold hover:bg-[#E53935] hover:text-white transition-all duration-300">
                  Close Loan
                </button>
              </div>
            </div>
            <Razorpay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repay;
