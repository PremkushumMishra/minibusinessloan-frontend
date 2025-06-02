import React from "react";
import { useRazorpay } from "react-razorpay";

const RazorpayButton = () => {
  const { Razorpay } = useRazorpay();

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
      key: "rzp_test_z1YUJiDZtgk2UQ", // Replace with your Razorpay Key
      amount: 50000, // in paise = ₹500
      currency: "INR",
      name: "Talking Loan",
      description: "Business Loan Processing Fee",
      image: "/newnavlogo.png", // Optional: your logo path
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment Response:", response);
      },
      prefill: {
        // name: "Prem Kushum",
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
    <div className="text-center mt-10">
      <button
        className="flex items-center justify-center gap-3 bg-[#003366] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#0250a3] hover:scale-105 focus:ring-4 focus:ring-[#003366]/30 transition-all duration-300 font-semibold text-lg mx-auto"
        style={{ minWidth: 240 }}
        onClick={loadRazorpay}
      >
        <img
          src="/razorpaylogo.png"
          alt="Razorpay"
          className="h-7 w-7 object-contain"
          style={{ background: "#fff", borderRadius: "6px", padding: "2px" }}
        />
        Pay with Razorpay
      </button>
    </div>
  );
};

export default RazorpayButton;
