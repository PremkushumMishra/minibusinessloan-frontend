import React from "react";
import { Link } from "react-router-dom";
import newheropic from "../assets/newheropic.jpg";
import rupeeicon from "../assets/rupeeicon.png"; // Add your rupee icon here

const TalkingLoan = () => {
  return (
    <div
      className="w-full min-h-[600px] flex items-center justify-center md:justify-start bg-cover bg-center relative rounded-t-4xl rounded-bl-4xl rounded-br-none overflow-hidden"
      style={{
        backgroundImage: `url(${newheropic})`,
        minHeight: 500,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/20 z-0" />

      {/* Card */}
      <div className="relative z-10 max-w-sm w-full min-h-[420px] bg-[#EAEAEA] rounded-t-2xl rounded-bl-2xl rounded-br-none shadow-xl p-8 m-6 flex flex-col items-center justify-center md:ml-20">
        <img
          src={rupeeicon}
          alt="Rupee"
          className="w-16 h-16 mb-4"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
        />
        <h2 className="text-2xl font-bold text-center mb-2 font-poppins text-[#222]">
          Grow your Business<br />
          Get Loan in just 30 Minutes
        </h2>
        <p className="text-base text-center text-[#444] mb-6 font-poppins">
          Get Loan upto 5 Thousand to 10 Lakhs<br />
          Instantly In just 30 Minutes
        </p>
        <Link to="/mobile-verification">
          <button className="bg-[#11468F] text-white px-12 py-2 font-semibold text-base rounded-t-2xl rounded-bl-2xl rounded-br-none hover:bg-[#003366] transition-all mx-auto block">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TalkingLoan;