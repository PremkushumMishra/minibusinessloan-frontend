import React from "react";
import { Link } from "react-router-dom";

import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] p-2 sm:p-3 md:p-6  relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]"></div>

        {/* Quick Link, Contact, Reach Us */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center relative z-10">
          <div className="text-center sm:text-left">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
              Quick Link
            </h2>

            <div className="space-y-1">
              <Link
                to="/terms"
                className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold"
              >
                Terms & Condition <br />
              </Link>
              <Link to='/privacy' className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                Privacy Policy
              </Link>

              <p className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                FAQs
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
              Contact
            </h3>
            <div className="space-y-1">
              <p className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                info@minibusinessloan.com
              </p>
              <p className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors cursor-pointer font-bold">
                +91 7814447895
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
              Reach Us
            </h3>
            <div className="space-y-1">
              {/* <p className="text-sm md:text-base text-gray-700 font-bold">
                2nd Floor, 1/50, Ganga Appartment,
              </p> */}
              <p className="text-sm md:text-base text-gray-700 font-bold">
                Lalita Park, Gurudwara, Lalita Park,
              </p>
              <p className="text-sm md:text-base text-gray-700 font-bold">
                New Delhi, East Delhi, Delhi, 110092
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/30 my-3 md:my-4"></div>

        {/* Logo Left & Social Icons Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 relative z-10">
          <div className="flex items-center justify-center text-lg md:text-xl font-b px-3 md:px-4 py-1 rounded-full text-center w-full md:w-auto">
            <img
              src="/newlogo.png"
              alt="Blinkr Logo"
              className="h-24 w-24 rounded-full object-contain"
            />
          </div>

          <div className="flex gap-3 mr-10 md:gap-4 justify-center w-full md:w-auto">
            {[
              { icon: FaYoutube, link: "https://youtube.com/@blinkr" },
              { icon: FaFacebookF, link: "https://facebook.com/blinkr" },
              { icon: FaInstagram, link: "https://instagram.com/blinkr" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-lg p-2 md:p-3 rounded-full text-gray-800 text-lg md:text-xl transition-all duration-300 hover:scale-125 hover:bg-white hover:shadow-xl hover:text-[#003366]"
              >
                {Icon && <Icon />}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-black/30 my-3 md:my-4"></div>
      </footer>

      {/* Bottom Section */}
      <div className="text-center text-white text-sm md:text-base py-2 md:py-3 bg-[#003366] rounded-b-3xl mb-4 font-bold">
        Mini Business Loan. 2025 All rights reserved
      </div>
    </>
  );
};

export default Footer;
