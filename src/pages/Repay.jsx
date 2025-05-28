import React, { useState } from "react";

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-[#003366]">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
      </div>
      {children}
    </div>
  </div>
);

const Repay = () => {
  // const [showUPIModal, setShowUPIModal] = useState(false);
  const [openModal, setOpenModal] = useState(null); // null, 'upi', 'netbanking', 'card', 'wallet'

  const upiApps = [
    { name: "Paytm", logo: "/paytmlogo.png" },
    { name: "Google Pay", logo: "/googlepay.jpg" },
    { name: "PhonePe", logo: "/phonepay.png" },
    { name: "BHIM", logo: "/bhimlogo.png" }
  ];

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
          <div className="bg-gradient-to-r from-[#003366] to-blac rounded-lg shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
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
                    <span className="text-2xl">₹</span>
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
                    <h3 className="font-bold text-[#003366]">Loan for Closure</h3>
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
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setOpenModal('netbanking')}
              >
                <div className="flex justify-center mb-2">
                  <img src="/netbanking.jpg" alt="Net Banking" className="h-8" />
                </div>
                <p className="font-bold text-[#003366]">Net Banking</p>
              </div>
              <div
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setOpenModal('upi')}
              >
                <div className="flex justify-center mb-2">
                  <img src="/upipic.png" alt="UPI" className="h-8" />
                </div>
                <p className="font-bold text-[#003366]">UPI</p>
              </div>
              <div
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setOpenModal('card')}
              >
                <div className="text-3xl mb-2 text-[#003366]">💳</div>
                <p className="font-bold text-[#003366]">ATM/Debit Card</p>
              </div>
              <div
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-3xl mb-2 text-[#003366] flex justify-center items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 10h20" />
                    <path d="M6 14h.01" />
                    <path d="M10 14h.01" />
                  </svg>
                </div>
                <p className="font-bold text-[#003366]"> Wallet</p>
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

      {/* Net Banking Modal */}
      {openModal === 'netbanking' && (
        <Modal title="Choose Your Bank" onClose={() => setOpenModal(null)}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Add your bank logos here */}
            <img src="/sbi.png" alt="SBI" className="h-12 mx-auto" />
            <img src="/hdfcbnk.png" alt="HDFC" className="h-12 mx-auto" />
            <img src="/icici.jpg" alt="ICICI" className="h-12 mx-auto" />
            <img src="/axisbnk.png" alt="Axis" className="h-12 mx-auto" />
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300">
            Proceed to Net Banking
          </button>
        </Modal>
      )}

      {/* UPI Modal */}
      {openModal === 'upi' && (
        <Modal title="Choose UPI App" onClose={() => setOpenModal(null)}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {upiApps.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 cursor-pointer transition-all duration-300">
                <img src={app.logo} alt={app.name} className="h-12 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{app.name}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="block text-gray-700 font-medium mb-2">Enter Your UPI ID</label>
            <input type="text" placeholder="example@upi" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent" />
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300">
            Pay Now
          </button>
        </Modal>
      )}

      {/* ATM/Debit Card Modal */}
      {openModal === 'card' && (
        <Modal title="Enter Card Details" onClose={() => setOpenModal(null)}>
          <div className="space-y-4">
            <input type="text" placeholder="Card Number" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            <div className="flex gap-2">
              <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 rounded-lg border border-gray-300" />
              <input type="text" placeholder="CVV" className="w-1/2 px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-[#003366] to-[#E53935] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-300">
            Pay Now
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Repay;
