import React, { useState, useEffect } from "react";

const LoanEligiblity = ({ eligibleAmount = 100000 }) => {
  // You can fetch eligibleAmount from backend or props
  // For demo, using a default value

  const [selectedOption, setSelectedOption] = useState("daily");
  const [emi, setEmi] = useState({ daily: 0, weekly: 0 });

  // Example calculation: 100 days tenure, 18% annual interest
  useEffect(() => {
    const principal = eligibleAmount;
    const tenureDays = 100;
    const interestRate = 0.18; // 18% annual
    const interest = (principal * interestRate * (tenureDays / 365));
    const totalPayable = principal + interest;

    setEmi({
      daily: Math.round(totalPayable / tenureDays),
      weekly: Math.round(totalPayable / (tenureDays / 7)),
    });
  }, [eligibleAmount]);

  return (
    <div className="max-w-lg mx-auto mt-24 p-8 bg-[#eaf3fb] rounded-3xl shadow-2xl text-center border border-[#e0eafc]">
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-3 text-[#003366] drop-shadow-lg"
        style={{
          letterSpacing: "1px",
          textShadow: "0 4px 16px #b6c6e6, 0 1px 0 #fff",
        }}
      >
        🎉 Congratulations!
      </h2>
      <p className="text-base md:text-lg mb-9 text-[#003366] font-medium opacity-80">
        You are eligible for a business loan of
      </p>
      {/* Amount pill */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-3">
          <span
            className="relative text-5xl md:text-6xl font-extrabold text-[#E53935] bg-white px-12 py-3 rounded-full border-4 border-[#E53935] shadow-lg"
            style={{ letterSpacing: 2 }}
          >
            ₹{eligibleAmount.toLocaleString()}
          </span>
        </div>
        {/* <span className="text-green-700 text-2xl mt-2 font-bold flex items-center justify-center gap-2"> */}
          {/* <span className="text-2xl">✅</span> */}
          {/* <span className="ml-1">Eligible</span> */}
        {/* </span> */}
      </div>
      <div className="my-6 border-t border-[#d1e3f8]"></div>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm ${
            selectedOption === "daily"
              ? "bg-[#003366] text-white border-2 border-[#003366]"
              : "bg-white text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white"
          }`}
          onClick={() => setSelectedOption("daily")}
        >
          Daily EMI
        </button>
        <button
          className={`px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm ${
            selectedOption === "weekly"
              ? "bg-white text-[#E53935] border-2 border-[#E53935]"
              : "bg-white text-[#E53935] border-2 border-[#E53935] hover:bg-[#E53935] hover:text-white"
          }`}
          style={selectedOption === "weekly" ? { background: "#fff", color: "#E53935" } : {}}
          onClick={() => setSelectedOption("weekly")}
        >
          Weekly EMI
        </button>
      </div>
      <div className="mt-6">
        <p className="text-lg font-medium text-[#003366] mb-1">
          {selectedOption === "daily" ? "Your Daily EMI:" : "Your Weekly EMI:"}
        </p>
        <p className="text-4xl font-extrabold text-[#003366] mb-1">
          ₹{emi[selectedOption].toLocaleString()}
        </p>
        <p className="text-base text-gray-500">
          {selectedOption === "daily"
            ? "Pay every day for 100 days"
            : "Pay every week for 14 weeks"}
        </p>
      </div>
    </div>
  );
};

export default LoanEligiblity;
