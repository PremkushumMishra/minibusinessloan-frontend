import React from "react";
import { Link } from "react-router-dom";
import newheropic from "../assets/newheropic.jpg";
import rupeeicon from "../assets/rupeeicon.png";

function TalkingLoan() {
  return (
    <div className="max-w-full mx-auto px-2 md:px-8 rounded-bl-3xl py-4 bg-gray-300">
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-start bg-gray-200 relative rounded-t-3xl md:rounded-t-3xl rounded-bl-3xl rounded-br-none min-h-[350px] md:min-h-[600px] overflow-hidden"
      >
        {/* Background Image - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src={newheropic}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
        </div>

        {/* Mobile Only: Show image as banner on top */}
        <div className="block md:hidden w-full">
          <img
            src={newheropic}
            alt="Hero"
            className="w-full h-48 object-cover object-center rounded-t-3xl"
          />
        </div>

        {/* Card */}
        <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 rounded-t-2xl rounded-bl-2xl rounded-br-none shadow-xl p-4 sm:p-6 md:p-8 mx-auto md:mx-0 md:ml-16 my-4 md:my-8 flex flex-col items-center justify-center">
          <img
            src={rupeeicon}
            alt="Rupee"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
          />
          
          <h2 className="font-poppins font-poppins text-[30px] leading-[140%] text-center text-[#2D2D2D] mb-2">
            Grow your Business
            <br />
            Get Loan in just 30 Minutes
          </h2>
          
          <p className="font-poppins font-normal mb-6 text-[20px] leading-[140%] text-center text-[#0D4059]">
            From 5 Thousand To 5 Lacs Instantly in your Bank Account
            <br />
          </p>
          
          <Link to="/mobile-verification" className="w-full max-w-xs">
            <button className="bg-blue-800 text-white px-6 py-3 font-semibold text-sm sm:text-base rounded-t-xl rounded-bl-xl rounded-br-none hover:bg-blue-900 transition-all duration-300 w-full">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalkingLoan;