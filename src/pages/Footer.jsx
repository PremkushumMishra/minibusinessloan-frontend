import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] pt-4">
      {/* Outer Blue Box */}
      <div className="max-w-full mx-2 md:mx-4 lg:mx-8 border-2 border-white rounded-t-2xl bg-[#0D4183] px-4 md:px-10 pt-6 pb-2" style={{boxShadow: "0 2px 8px 0 #e0e0e0"}}>
        {/* 3 Columns */}
        <div
          className="w-full max-w-[1240px] min-h-[107px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-2 md:px-8"
          style={{ color: "#fff" }}
        >
          {/* Quick Link */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h2 className="text-lg mb-1 md:mb-2 ml-3" style={{ color: "#fff" }}>Quick Link</h2>
            <div className="flex flex-col gap-1 text-sm font-inter">
              <Link to="/terms" className="hover:underline" style={{ color: "#fff" }}>Terms & Condition</Link>
              <div className="flex flex-row gap-2 justify-center">
                <Link to="/privacy" className="hover:underline" style={{ color: "#fff" }}> | Privacy Policy</Link>
                <span>|</span>
                <Link to="/faqs" className="hover:underline" style={{ color: "#fff" }}>FAQs |</Link>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-1 md:mb-2 text-center" style={{ color: "#fff" }}>Contact</h2>
            <div className="text-base font-inter text-center text-white leading-tight">
              <p className="mb-0">info@minibusinessloan.com</p>
              <p className="mb-0">+91-7814447895</p>
            </div>
          </div>
          {/* Reach Us */}
          <div className="flex flex-col items-center md:items-end md:flex-1">
            <h2 className="text-lg mb-1 md:mb-2 md:mr-12" style={{ color: "#fff" }}>Reach Us</h2>
            <div className="text-sm font-inter">
              <p style={{ color: "#fff" }}>
                Ganga Appartment Lalita Park,<br />
                New Delhi, 110092, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-3"></div>

        {/* Logo and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/newlogofooter.png"
              alt="MINI Business Loan"
              className="h-16 md:h-20 w-auto object-contain"
            />
        
          </div>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className=" w-12 h-12 flex items-center justify-center" title="YouTube">
              <img src="/youtube.webp" alt="YouTube" className="h-10 w-10 object-contain" />
            </a>
            <a href="#" className="rounded-lg w-12 h-12 flex items-center justify-center" title="Facebook">
              <img src="/facebook.png" alt="Facebook" className="h-10 w-10 object-contain" />
            </a>
            <a href="#" className=" rounded-lg w-12 h-12 flex items-center justify-center" title="Instagram">
              <img src="/Instagram_icon.png" alt="Instagram" className="h-10 w-10 object-contain" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-3"></div>
      </div>
      {/* Bottom Copyright */}
      <div className="bg-[#D9D9D9] text-center text-[#3A3838] text-xs md:text-sm py-2 font-bold border-x-2 border-b-2 border-white rounded-b-2xl max-w-full mx-2 md:mx-4 lg:mx-8 mb-4">
        minibusinessloan. 2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
