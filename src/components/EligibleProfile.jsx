import React from "react";

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
      style={{ background: "#EAEAEA" }}
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex justify-center items-center">
          <h1
            className="font-poppins font-medium text-2xl md:text-3xl lg:text-4xl text-[#0D4183] text-center"
            style={{
              lineHeight: '140%',
              letterSpacing: 0,
              fontWeight: 500,
            }}
          >
            Who Can Apply for This Loan?
          </h1>
        </div>
        <div
          className="mx-auto mb-2 mt-2"
          style={{
            width: 120,
            height: 6,
            borderRadius: 6,
            backgroundColor: "#003366",
          }}
        />
        <p
          className="font-poppins text-base md:text-lg lg:text-xl text-[#222] font-normal mx-auto"
          style={{
            lineHeight: '140%',
            letterSpacing: 0,
            textAlign: 'center',
            fontWeight: 400,
            maxWidth: '28rem',
          }}
        >
          If you run a business or earn a steady income, <br className="hidden sm:block" /> you might be eligible!
        </p>
        {/* Profile Names */}
        <div
          className="font-poppins text-center mt-4 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl"
          style={{
            fontWeight: 500,
            lineHeight: '140%',
            letterSpacing: 0,
          }}
        >
          Retail Shop Owner, Small Manufacturer, Service Provider, <br className="hidden sm:block" /> Wholesaler, Street Food Vendor
        </div>
      </div>

      {/* Cards Container - Made fully responsive */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile view (single column) */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {images.map((img, idx) => (
            <div key={idx} className="flex justify-center">
              <div
                className="relative rounded-3xl w-full max-w-xs"
                style={{
                  animation: `fadeInUp 0.7s ease ${0.1 * idx + 0.2}s both`,
                }}
              >
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
            </div>
          ))}
        </div>

        {/* Tablet view (3 columns) */}
        <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="flex justify-center px-2">
              <div
                className="relative rounded-3xl w-full"
                style={{
                  animation: `fadeInUp 0.7s ease ${0.1 * idx + 0.2}s both`,
                }}
              >
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
            </div>
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
              <div key={idx} className="flex justify-center px-1">
                <div
                  className="relative rounded-3xl w-full"
                  style={{
                    animation: `fadeInUp 0.7s ease ${0.1 * idx + 0.2}s both`,
                  }}
                >
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
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EligibleProfile;