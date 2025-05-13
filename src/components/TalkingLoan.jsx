import React from "react";
import { Link } from "react-router-dom";
import newheropic from "../assets/newheropic.jpg";

const TalkingLoan = () => {
  return (
    <div className="w-full min-h-[500px] mt-15">
      {/* Desktop View */}
      <div className="hidden md:flex relative w-full h-[500px] items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${newheropic})` }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex flex-col justify-center h-full pl-20 max-w-xl w-full z-10">
          <h1 className="font-bold text-white mb-2 mt-20" style={{ fontSize: "3rem", lineHeight: "1.1" }}>
            <span className="block md:inline" style={{ fontSize: "3.2rem" }}>Grow your business</span>
            <span className="block text-[#00BCD4] text-4xl font-semibold mt-2">
              Get loan in 30 minutes
            </span>
          </h1>
          <p className="text-xl text-white mb-8">
            Get up to 10 lakhs credit*
          </p>
          <Link to="/mobile-verification">
            <button className="px-8 py-3 bg-[#003366] text-white rounded-full font-bold text-lg shadow-md hover:bg-[#00509e] transition-all duration-300 flex items-center gap-2 w-fit">
              Apply Now
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col">
        {/* Image */}
        <div className="w-full h-[300px] relative">
          <img 
            src={newheropic} 
            alt="Business Growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Text Content */}
        <div className="bg-[#003366] p-6 text-center">
          <h1 className="font-bold text-white mb-2" style={{ fontSize: "1.8rem", lineHeight: "1.1" }}>
            <span className="block" style={{ fontSize: "2rem" }}>Grow your business</span>
            <span className="block text-[#00BCD4] text-xl font-semibold mt-2">
              Get loan in 30 minutes
            </span>
          </h1>
          <p className="text-base text-white mb-6">
            Get up to 10 lakhs credit*
          </p>
          <Link to="/mobile-verification">
            <button className="px-6 py-2 bg-white text-[#003366] rounded-full font-bold text-base shadow-md hover:bg-[#00509e] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
              Apply Now
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalkingLoan;
