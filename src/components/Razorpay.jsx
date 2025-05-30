import React from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const RazorpayButton = () => {
    const { error, isLoading, Razorpay } = useRazorpay();

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = () => {
      // Check if Razorpay is loaded
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
      key: "rzp_test_abc123xyz456", // Replace with your Razorpay Key
      amount: 50000, // in paise = ₹500
      currency: "INR",
      name: "minibusinessloan Pvt Ltd",
      description: "Business Loan Processing Fee",
      image: "/logo.png", // Optional: your logo path
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment Response:", response);
      },
      prefill: {
        name: "Prem Kushum",
        email: "prem@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#003366",
      },
    };

    // Open Razorpay checkout
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="text-center mt-10">
      <button
        className="bg-[#003366] text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition-all duration-300"
        onClick={loadRazorpay}
      >
        Pay with Razorpay
      </button>
    </div>
  );
};

export default RazorpayButton;
