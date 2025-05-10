import React from "react";
import { Link } from "react-router-dom";
const GetAmount = () => {
  return (
    <div className="max-w-4xl mx-auto my-3 p-15 bg-white rounded-2xl shadow-xl border border-[#003366] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
        Get amount <span className="text-4xl md:text-5xl text-[#E53935] font-extrabold">₹5,000</span> upto <span className="text-4xl md:text-5xl text-[#E53935] font-extrabold">₹10,00,000</span>
      </h2>
      <p className="text-[#003366] text-lg mt-4 mb-10">
        Quick approval within 30 minutes • 120 days tenure • No prepayment
        penalty
      </p>
      <Link to="/mobile-verification">
        <button className="mt-4 bg-[#003366] text-white px-10 py-4 text-xl rounded-lg font-bold shadow-md transition-all duration-300 hover:bg-[#E53935] hover:text-white">
          Apply Now
          <svg
            className="w-5 h-5 inline ml-2 -mt-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default GetAmount;
