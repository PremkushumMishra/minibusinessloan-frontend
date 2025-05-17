import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const images = [
  { src: "/imagefifth.jpg" },
  { src: "/imagesixth.jpg" },
  { src: "/newstreetshop.jpg" },
  { src: "/imageforth.jpg" },
  { src: "/imagefirst.jpg" },

];

const EligibleProfile = () => {
  return (
    <div
      className="w-full min-h-screen px-4 py- flex flex-col justify-center items-center"
      style={{ background: "#EAEAEA" }}
    >
      {/* Heading */}
      <div className="text-center">
        <div className="flex justify-center items-center">
          <h1
            className="font-poppins font-medium mt-3 text-[#0D4183] text-center"
            style={{
              fontSize: '40px',
              lineHeight: '140%',
              letterSpacing: 0,
              fontWeight: 500,
              // marginTop: '15px',
            }}
          >
            Who Can Apply for This Loan?
          </h1>
        </div>
        <div
          className="mx-auto mt-2 mb-2"
          style={{
            width: 120,
            height: 6,
            // background: "linear-gradient(90deg, #003366 60%, #E53935 100%)",
            borderRadius: 6,
          }}
        />
        <p className="text-[#222] text-base max-w-md mx-auto font-semibold">
          If you run a business or earn a steady income, <br /> you might be eligible!
        </p>
        {/* Profile Names */}
        <div className="mt-9 text-center font-bold text-lg text-[#222]">
          Retail Shop Owner, Small Manufacturer, Service Provider, <br /> Wholesaler, Street Food Vendor
        </div>
      </div>

      {/* Cards Container - Updated to be responsive */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-0 items-end">
          {images.map((img, idx) => {
            // Size classes based on index
            let sizeClass = "w-44 h-60"; // default
            if (idx === 0 || idx === 4) sizeClass = "w-56 h-80"; // first & last: largest, more height
            if (idx === 2) sizeClass = "w-50 h-50"; // 3rd: medium
            if (idx === 1 || idx === 3) sizeClass = "w-48 h-64"; // 2nd & 4th: slightly smaller

            // Remove margin for vertical alignment
            let marginClass = "";

            return (
              <div key={idx} className={`flex justify-center ${marginClass}`}>
                <div
                  className="relative rounded-3xl max-w-xs w-full"
                  style={{
                    minHeight: 200,
                    animation: `fadeInUp 0.7s ease ${0.1 * idx + 0.2}s both`,
                  }}
                >
                  <div className="relative group flex justify-center">
                    <div
                      className={`rounded-2xl flex justify-center items-center mx-auto ${sizeClass}`}
                    >
                      <img
                        src={img.src}
                        // alt={`Eligible ${idx + 1}`}
                        className="w-full h-full object-cover rounded-2xl relative z-10"
                        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                      />
                    </div>
                  </div>
                  <div
                    className="w-full text-center py-4 px-2"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                    }}
                  >
                    <span className="text-lg text-white tracking-wide">
                      {img.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>     
    </div>
  );
};

export default EligibleProfile;
