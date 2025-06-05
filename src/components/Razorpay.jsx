import React from "react";

const RazorpayButton = () => {
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = () => {
      if (window.Razorpay) {
        handlePayment();
      } else {
        alert("Razorpay SDK failed to load.");
      }
    };
    document.body.appendChild(script);
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_z1YUJiDZtgk2UQ",
      amount: 50000,
      currency: "INR", 
      name: "Talking Loan",
      description: "Business Loan Processing Fee",
      image: "/newnavlogo.png",
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment Response:", response);
      },
      prefill: {
        email: "prem@example.com",
        contact: "#",
      },
      theme: {
        color: "#003366",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-[#0D4183] to-[#003366] flex items-center justify-center mt-5  p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Main Container */}
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Payment Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl xs:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10">
          
          {/* Header */}
          <div className="text-center mb-4 xs:mb-5 sm:mb-6 md:mb-7">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-poppins text-[#003366] mb-2 xs:mb-3">
              Complete Your Payment
            </h1>
            <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#003366] to-[#0D4183] mx-auto rounded-full"></div>
          </div>
          
          {/* Payment Details */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl mb-4 xs:mb-5 sm:mb-6 border border-blue-100">
            <div className="text-center">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 mb-2 xs:mb-3">
                Processing fee for your business loan
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366]">
                  {/* ₹500 */}
                  your amount
                </span>
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-500">
                  {/* .00 */}
                </span>
              </div>
              <p className="text-xs xs:text-sm text-gray-500 mt-1 xs:mt-2">
                One-time processing fee
              </p>
            </div>
          </div>

          {/* Payment Button */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5">
            <button
              onClick={loadRazorpay}
              className="group relative w-full inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 md:py-6 text-sm xs:text-base sm:text-lg md:text-xl font-semibold rounded-xl xs:rounded-2xl text-white bg-gradient-to-r from-[#003366] to-[#0D4183] hover:from-[#0250a3] hover:to-[#1557a3] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl xs:rounded-2xl transition-all duration-700 group-hover:w-full"></span>
              
              {/* Razorpay Logo */}
              <div className="relative z-10 flex items-center justify-center gap-2 xs:gap-3">
                <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-md flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 fill-[#003366]">
                    <path d="M22.436 0H1.564C.7 0 0 .7 0 1.564v20.872C0 23.3.7 24 1.564 24h20.872c.864 0 1.564-.7 1.564-1.564V1.564C24 .7 23.3 0 22.436 0zM12 18l-6-6h12l-6 6z"/>
                  </svg>
                </div>
                <span className="font-bold tracking-wide">
                  Pay Securely
                </span>
              </div>
            </button>
            
            {/* Security Info */}
            <div className="text-center space-y-2 xs:space-y-3">
              <p className="text-xs xs:text-sm text-gray-500">
                🔒 Secured by Razorpay Payment Gateway
              </p>
              <div className="flex items-center justify-center gap-2 xs:gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SSL Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  PCI Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Support Info */}
          <div className="mt-4 xs:mt-5 sm:mt-6 pt-3 xs:pt-4 sm:pt-5 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs xs:text-sm text-gray-500 mb-2">
                Need help? Contact support
              </p>
              <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-4 text-xs text-gray-400">
                <span>📞 +91-7814447895</span>
                <span className="hidden xs:inline">|</span>
                <span>✉️ customercare@techaviom.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-3 xs:mt-4 sm:mt-5 text-center">
          <p className="text-xs xs:text-sm text-white/80 px-2">
            By proceeding, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default RazorpayButton;