import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [days, setDays] = useState(30);
  const interestRate = 0.2; // 0.2% per day (fixed)

  // Loan calculations
  const totalInterest = (loanAmount * interestRate * days) / 100;
  const payableAmount = loanAmount + totalInterest;

  // Colors
  const loanColor = "#003366"; // Deep Blue
  const interestColor = "#E53935"; // Red
  const payableColor = "#003366"; // Deep Blue

  // Data for the donut chart
  const data = [
    { name: "Loan Amount", value: loanAmount, color: loanColor },
    { name: "Total Interest", value: totalInterest, color: interestColor },
    { name: "Payable Amount", value: payableAmount, color: payableColor },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#003366",
            color: "white",
            borderRadius: 8,
            padding: "4px 8px",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          ₹{payload[0].value.toLocaleString()}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center bg-[#003366] p-7 pb-6 rounded-1xl">
      <h2 className="text-3xl mt-0.1 font-bold mb-1 text-white">
        Loan Calculator
      </h2>
      <div className="flex flex-wrap md:flex-nowrap p-6 w-full max-w-5xl gap-2 rounded-xl">
        {/* Left Side: Sliders */}
        <div className="flex flex-col rounded-3xl bg-white/90 backdrop-blur-sm gap-10 w-full md:w-2/2 p-9 shadow-lg">
          <div>
            <label className="block font-semibold mb-2 text-[#003366]">
              Business loan amount: ₹{loanAmount.toLocaleString()}
            </label>
            <input
              type="number"
              min="5000"
              max="1000000"
              step="1"
              value={loanAmount}
              onChange={e => {
                let val = Number(e.target.value);
                if (val < 5000) val = 5000;
                if (val > 1000000) val = 1000000;
                setLoanAmount(val);
              }}
              className="w-full mb-2 px-4 py-2 border-2 border-[#003366] rounded-lg text-[#003366] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] bg-white"
            />
            <input
              type="range"
              min="5000"
              max="1000000"
              step="1"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#E53935] h-1 bg-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[#003366]">
              Number of days (1-100): {days}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={days}
              onChange={e => {
                let val = Number(e.target.value);
                if (val < 1) val = 1;
                if (val > 100) val = 100;
                setDays(val);
              }}
              className="w-full mb-2 px-4 py-2 border-2 border-[#003366] rounded-lg text-[#003366] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[#E53935] bg-white"
            />
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#E53935] h-1 bg-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[#003366]">
              Interest rate: 0.2% per day (fixed)
            </label>
          </div>
        </div>

        {/* Right Side: Donut Chart */}
        <div className="w-full md:w-1/2 p-4 bg-white/90 backdrop-blur-sm text-[#003366] rounded-3xl shadow-lg flex flex-col items-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>

          {/* Legends */}
          <div className="mt-4 text-sm flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: loanColor }}
              ></span>
              <p className="text-[#003366]">
                Loan Amount: ₹{loanAmount.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: interestColor }}
              ></span>
              <p className="text-[#003366]">
                Total Interest: ₹{totalInterest.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: payableColor }}
              ></span>
              <p className="text-[#003366]">
                Payable Amount: ₹{payableAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
