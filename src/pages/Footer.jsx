import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#003366] p-2 sm:p-3 md:p-6  relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]"></div>

        {/* Quick Link, Contact, Reach Us */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center relative z-10">
          <div className="text-center sm:text-left">
            <h2 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">
              Quick Link
            </h2>

            <div className="space-y-1">
              <Link
                to="/terms"
                className="text-xs md:text-sm text-white hover:text-white transition-colors cursor-pointer font-bold"
              >
                Terms & Condition <br />
              </Link>
              <Link
                to="/privacy"
                className="text-xs md:text-sm text-white hover:text-white transition-colors cursor-pointer font-bold"
              >
                Privacy Policy <br />
              </Link>

              <Link
                to="/faqs"
                className="text-xs md:text-sm text-white hover:text-white transition-colors cursor-pointer font-bold"
              >
                FAQs
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">
              Contact
            </h3>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-white hover:text-white transition-colors cursor-pointer font-bold">
                info@minibusinessloan.com
              </p>
              <p className="text-xs md:text-sm text-white hover:text-white transition-colors cursor-pointer font-bold">
                +91 7814447895
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">
              Reach Us
            </h3>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-white font-bold">
                2nd Floor, 1/50, Ganga Appartment, <br />
                Lalita Park, Gurudwara, Lalita Park,

              </p>{" "}
              <p className="text-xs md:text-sm text-white font-bold">
                New Delhi, East Delhi, Delhi, 110092
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/30 my-3 md:my-4"></div>

        {/* Logo Left & Social Icons Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 relative z-10">
          <div className="flex items-center justify-center text-lg md:text-xl font-b px-5 md:px-7 py-1 rounded-full text-center w-full md:w-auto">
            <img
              src="/newlogofooter.png"
              alt="."
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-contain mx-auto"
            />
          </div>

          <div className="flex gap-2 mr-6 md:gap-3 justify-center w-full md:w-auto">
            <a
              href="https://youtube.com/@blinkr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-lg p-1.5 md:p-2 rounded-full text-gray-800 text-base md:text-lg transition-all duration-300 hover:scale-125 hover:bg-white hover:shadow-xl hover:text-[#003366]"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
                className="h-4 w-4 md:h-5 md:w-5 object-contain"
              />
            </a>
            <a
              href="https://facebook.com/blinkr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-lg p-1.5 md:p-2 rounded-full text-gray-800 text-base md:text-lg transition-all duration-300 hover:scale-125 hover:bg-white hover:shadow-xl hover:text-[#003366]"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-4 w-4 md:h-5 md:w-5 object-contain"
              />
            </a>
            <a
              href="https://instagram.com/blinkr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-lg p-1.5 md:p-2 rounded-full text-gray-800 text-base md:text-lg transition-all duration-300 hover:scale-125 hover:bg-white hover:shadow-xl hover:text-[#003366]"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="h-4 w-4 md:h-5 md:w-5 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-black/30 my-3 md:my-4"></div>
      </footer>

      {/* Bottom Section */}
      <div className="text-center text-white text-xs md:text-sm py-2 md:py-3 bg-[#003366] rounded-b-3xl mb-4 font-bold">
        Mini Business Loan. 2025 All rights reserved
      </div>
    </>
  );
};

export default Footer;
