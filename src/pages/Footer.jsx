import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] pt-2 sm:pt-4">
      {/* Outer Blue Box */}
      <div className="max-w-full mx-2 sm:mx-4 lg:mx-8 border-2 border-white rounded-t-2xl bg-[#0D4183] px-3 sm:px-4 md:px-6 lg:px-10 pt-4 sm:pt-6 pb-2" style={{boxShadow: "0 2px 8px 0 #e0e0e0"}}>
        
        {/* 3 Columns */}
        <div className="w-full max-w-[1240px] mx-auto">
          {/* Mobile Layout (Stack vertically) */}
          <div className="block lg:hidden space-y-6 text-center text-white">
            {/* Quick Links - Mobile */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold">Quick Link</h2>
              <div className="space-y-1 text-sm">
                <Link to="/terms" className="block hover:underline">Terms & Condition</Link>
                <Link to="/privacy" className="block hover:underline">Privacy Policy</Link>
                <Link to="/faqs" className="block hover:underline">FAQs</Link>
              </div>
            </div>
            
            {/* Contact - Mobile */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold">Contact</h2>
              <div className="text-sm space-y-1">
                <p>info@minibusinessloan.com</p>
                <p>+91-7814447895</p>
              </div>
            </div>
            
            {/* Address - Mobile */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold">Reach Us</h2>
              <div className="text-sm">
                <p>Ganga Appartment Lalita Park,<br />New Delhi, 110092, India</p>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout (3 columns) */}
          <div className="hidden lg:flex justify-between items-start text-white min-h-[107px] px-2 xl:px-8">
            {/* Quick Links - Desktop */}
            <div className="flex flex-col items-start flex-1">
              <h2 className="text-lg font-semibold mb-2">Quick Link</h2>
              <div className="space-y-1 text-sm">
                <Link to="/terms" className="block hover:underline">Terms & Condition</Link>
                <div className="flex items-center gap-2 text-sm">
                  <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                  <span>|</span>
                  <Link to="/faqs" className="hover:underline">FAQs</Link>
                </div>
              </div>
            </div>
            
            {/* Contact - Desktop */}
            <div className="flex flex-col items-center flex-1">
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <div className="text-base text-center space-y-1">
                <p>info@minibusinessloan.com</p>
                <p>+91-7814447895</p>
              </div>
            </div>
            
            {/* Address - Desktop */}
            <div className="flex flex-col items-end flex-1">
              <h2 className="text-lg font-semibold mb-2">Reach Us</h2>
              <div className="text-sm text-right">
                <p>Ganga Appartment Lalita Park,<br />New Delhi, 110092, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-3 sm:my-4"></div>

        {/* Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/newlogofooter.png"
              alt="MINI Business Loan"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity" 
              title="YouTube"
              aria-label="YouTube"
            >
              <img src="/youtube.webp" alt="YouTube" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity" 
              title="Facebook"
              aria-label="Facebook"
            >
              <img src="/facebook.png" alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity" 
              title="Instagram"
              aria-label="Instagram"
            >
              <img src="/Instagram_icon.png" alt="Instagram" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-3"></div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="bg-[#D9D9D9] text-center text-[#3A3838] text-xs sm:text-sm py-2 sm:py-3 font-bold border-x-2 border-b-2 border-white rounded-b-2xl max-w-full mx-2 sm:mx-4 lg:mx-8 mb-2 sm:mb-4">
        minibusinessloan. 2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;