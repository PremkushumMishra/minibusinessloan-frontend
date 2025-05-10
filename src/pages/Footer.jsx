import React from "react";
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] p-4 sm:p-6 md:p-10 rounded-t-3xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]"></div>

        {/* Quick Link, Contact, Reach Us */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center relative z-10">
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Quick Link
            </h2>
            <div className="space-y-2">
              <p className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                Terms & Condition
              </p>
              <p className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                Privacy Policy
              </p>
              <p className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                FAQs
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                info@avtmtech.com
              </p>
              <p className="text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                +91 8595333222
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Reach Us
            </h3>
            <div className="space-y-2">
              <p className="text-base md:text-lg text-gray-700 font-bold">
                S-370, Panchsheel Park,
              </p>
              <p className="text-base md:text-lg text-gray-700 font-bold">
                New Delhi, 110017, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/30 my-6 md:my-8"></div>

        {/* Logo Left & Social Icons Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative z-10">
          <div className="flex items-center justify-center text-lg md:text-xl font-b  px-4 md:px-6 py-2 rounded-full text-center w-full md:w-auto">
            <img src="/newlogo.png" alt="Blinkr Logo" className="h-34 w-34 rounded-full object-contain" />
          </div>

          <div className="flex gap-3 md:gap-4 justify-center w-full md:w-auto">
            {[
              { icon: FaXTwitter, link: "https://twitter.com/blinkr" },
              { icon: FaYoutube, link: "https://youtube.com/@blinkr" },
              { icon: FaFacebookF, link: "https://facebook.com/blinkr" },
              { icon: FaInstagram, link: "https://instagram.com/blinkr" },
              {
                icon: FaLinkedinIn,
                link: "https://linkedin.com/company/blinkr",
              },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-lg p-2 md:p-3 rounded-full text-gray-800 text-base md:text-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-lg"
                
              >
                {Icon && <Icon />}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-black/30 my-6 md:my-8"></div>
      </footer>

      {/* Bottom Section */}
      <div className="text-center text-black  text-base md:text-lg py-3 md:py-4 bg-gray-300 rounded-b-3xl mb-6 font-bold">
        TechAvom. 2025 All rights reserved
      </div>
    </>
  );
};

export default Footer;
