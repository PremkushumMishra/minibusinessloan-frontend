import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/amanimage.jpg" },
  { src: "/imagesixth.jpg" },
  { src: "/newstreetshop.jpg" },
  { src: "/imageforth.jpg" },
  { src: "/imagefirst.jpg" },
];

const EligibleProfile = () => {
  return (
    <div
      className="w-full min-h-screen px-4 py-8 md:py-12 flex flex-col justify-center items-center"
      style={{ background: "#FFFFFF" }}
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex justify-center items-center">
          <h1
            className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl text-[#0D4183] mb-2 text-center"
            style={{
              lineHeight: "140%",
              letterSpacing: 0,
              fontWeight: 500,
            }}
          >
            Who Can Apply for This Loan?
          </h1>
        </div>

        <p
          className="font-poppins text-base md:text-lg lg:text-xl text-[#222] font-normal mx-auto"
          style={{
            lineHeight: "140%",
            letterSpacing: 0,
            textAlign: "center",
            fontWeight: 400,
            maxWidth: "28rem",
          }}
        >
          If you run a business or earn steady income,{" "}
          <br className="hidden sm:block" /> you might be eligible!
        </p>

        {/* Profile Names */}
        <div
          className="font-poppins text-center mt-4 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl"
          style={{
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: 0,
          }}
        >
          <span
            className="font-poppins font-medium text-[20px] leading-[140%] text-center"
            style={{ letterSpacing: 0, color: "#0D4059", display: "block" }}
          >
            Retail Shop Owner, Small Manufacturer, Service Provider,
            <br className="hidden sm:block" />
            Wholesaler, Street Vendors<sup className="text-xs"><i>*Conditions apply</i></sup>
          </span>

        </div>
      </div>

      {/* Cards Container - Made fully responsive */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile view (single column) */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, y: -10 }} // Hover effect
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3 * idx,
              }}
            >
              <div className="relative rounded-3xl w-full max-w-xs">
                <div className="relative group flex justify-center">
                  <div className="w-full h-48 md:h-60 rounded-2xl flex justify-center items-center mx-auto">
                    <img
                      src={img.src}
                      alt={`Eligible profile ${idx + 1}`}
                      className="w-full h-full object-cover object-center rounded-2xl relative z-10"
                      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet view (3 columns) */}
        <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="flex justify-center px-2"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, y: -10 }} // Hover effect
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3 * idx,
              }}
            >
              <div className="relative rounded-3xl w-full">
                <div className="relative group flex justify-center">
                  <div className="w-full h-40 rounded-2xl flex justify-center items-center mx-auto">
                    <img
                      src={img.src}
                      alt={`Eligible profile ${idx + 1}`}
                      className="w-full h-full object-cover object-center rounded-2xl relative z-10"
                      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop view (5 columns with varying sizes) */}
        <div className="hidden md:grid grid-cols-5 gap-3 lg:gap-4 items-end">
          {images.map((img, idx) => {
            // Size classes based on index for desktop
            let sizeClass = "h-48 lg:h-60"; // default
            if (idx === 0 || idx === 4) sizeClass = "h-56 lg:h-80"; // first & last: largest
            if (idx === 2) sizeClass = "h-44 lg:h-52"; // 3rd: medium
            if (idx === 1 || idx === 3) sizeClass = "h-52 lg:h-64"; // 2nd & 4th: slightly smaller

            return (
              <motion.div
                key={idx}
                className="flex justify-center px-1"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, y: -10 }} // Hover effect
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3 * idx,
                }}
              >
                <div className="relative rounded-3xl w-full">
                  <div className="relative group flex justify-center">
                    <div
                      className={`w-full rounded-2xl flex justify-center items-center mx-auto ${sizeClass}`}
                    >
                      <img
                        src={img.src}
                        alt={`Eligible profile ${idx + 1}`}
                        className="w-full h-full object-cover object-center rounded-2xl relative z-10"
                        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EligibleProfile;
