import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const images = [
  { src: "/imagefirst.jpg", desc: "Retail Shop Owner" },
  { src: "/imageforth.jpg", desc: "Small Manufacturer" },
  { src: "/imagefifth.jpg", desc: "Service Provider" },
  { src: "/imagesixth.jpg", desc: "Wholesaler" },
  { src: "/newstreetshop.jpg", desc: "Street Food Vendor" },
];

const EligibleProfile = () => {
  return (
    <div
      className="w-full min-h-screen px-4 py-12 flex flex-col justify-center items-center"
      style={{ background: "#003366" }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-2">
          <FaCheckCircle className="text-3xl text-[#E53935] mr-3 drop-shadow-lg" />
          <h1
            className="text-3xl md:text-3xl font-extrabold text-white"
            style={{
              letterSpacing: 1,
            }}
          >
            Who Can Apply for This Loan?
          </h1>
        </div>
        <div className="mx-auto mt-2 mb-2" style={{ width: 120, height: 6, background: "linear-gradient(90deg, #003366 60%, #E53935 100%)", borderRadius: 6 }} />
        <p className="text-white text-base max-w-md mx-auto font-medium">
          If you run a business or earn a steady income, you might be eligible!
        </p>
      </div>

      {/* Cards Container - Updated to be responsive */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full"
            >
              <div
                className="relative rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn bg-transparent"
                style={{
                  minHeight: 340,
                  animation: `fadeInUp 0.7s ease ${0.1 * idx + 0.2}s both`,
                }}
              >
                {/* Floating Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-1 bg-[#E53935] text-white px-4 py-1 rounded-full shadow-md text-base font-bold z-10">
                  <FaCheckCircle className="mr-1" /> Eligible
                </div>
                <img
                  src={img.src}
                  alt={`Eligible ${idx + 1}`}
                  className="w-full h-60 object-cover rounded-2xl border-4 border-white"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                />
                <div className="w-full text-center py-4 px-2" style={{background: "rgba(255,255,255,0.15)", borderBottomLeftRadius: 24, borderBottomRightRadius: 24}}>
                  <span className="text-lg font-bold text-white tracking-wide">
                    {img.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EligibleProfile;











