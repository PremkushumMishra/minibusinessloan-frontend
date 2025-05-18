import React from "react";
import { Link } from "react-router-dom";
import newheropic from "../assets/newheropic.jpg";
import rupeeicon from "../assets/rupeeicon.png"; // Add your rupee icon here

const TalkingLoan = () => {
  const headingStyle = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '30px',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#2D2D2D'
  };

  const paragraphStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#0D4059'
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8 bg-[#EAEAEA]">
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-start bg-[#EAEAEA] md:bg-cover md:bg-center relative rounded-t-4xl rounded-bl-4xl rounded-br-none min-h-[350px] md:min-h-[600px]"
        style={{
          backgroundImage: `url(${newheropic})`,
        }}
      >
        {/* Mobile Only: Show image as banner on top */}
        <div className="block md:hidden w-full">
          <img
            src={newheropic}
            alt="Hero"
            className="w-full h-40 object-cover object-center rounded-t-2xl"
          />
        </div>
        {/* Overlay for better text visibility on desktop */}
        <div className="hidden md:block absolute inset-0 bg-black/10 md:bg-black/20 z-0 rounded-t-4xl rounded-bl-4xl rounded-br-none" />

        {/* Card */}
        <div className="relative z-10 w-full max-w-sm min-h-[450px] bg-[#EAEAEA] rounded-t-2xl rounded-bl-2xl rounded-br-none shadow-xl p-4 sm:p-6 md:p-8 m-2 sm:m-4 md:m-6 flex flex-col items-center justify-center md:ml-20 mt-0">
          <img
            src={rupeeicon}
            alt="Rupee"
            className="w-14 h-14 md:w-16 md:h-16 mb-4"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
          />
          <h2 className="text-xl md:text-2xl text-center mb-2 font-poppins text-[#222]">
            Grow your Business
            <br />
            Get Loan in just 30 Minutes
          </h2>
          <p 
            style={paragraphStyle}
            className="text-sm md:text-base text-center text-[#444] mb-6 font-poppins"
          >
            Get Loan upto 5 Thousand to 10 Lakhs
            <br />
            Instantly In just 30 Minutes
          </p>
          <Link to="/mobile-verification">
            <button className="bg-[#11468F] text-white px-12 md:px-16 py-2.5 font-semibold text-base rounded-t-xl rounded-bl-xl rounded-br-none hover:bg-[#003366] transition-all mx-auto block w-48 md:w-56">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalkingLoan;
