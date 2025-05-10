import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`bg-white border border-[#003366] w-[105%] md:w-[100%] lg:w-[70%] rounded-full flex items-center justify-between px-4 md:px-9 py-0 mt-2 mb-8 shadow-lg mx-auto fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          showNavbar ? "top-2" : "-top-20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/newlogo.png"
            alt="Blinkr Logo"
            className="h-19 w-auto object-contain bg-white p-1 rounded ml-2"
            style={{ maxWidth: "120px", maxHeight: "70px" }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-[#003366] font-medium">
            <li className="cursor-pointer hover:text-[#E53935]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#E53935]">
              <Link to="/about">About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-[#E53935]">
              <Link to="/repay">Repay</Link>
            </li>
            <li className="cursor-pointer hover:text-[#E53935]">
              <Link to="/contact">ContactUs</Link>
            </li>
          </ul>

          {/* Apply Now Button - Desktop */}
          <Link to="/mobile-verification" className="block">
            <div className="bg-[#003366] px-8 py-3 rounded-full font-bold text-white border border-[#003366] hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 flex items-center justify-center gap-2">
              <span className="text-lg">Apply Now</span>
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-screen w-[80%] max-w-sm bg-white border-l border-[#003366] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-screen">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-center">
            <img
              src="/newlogo.png"
              alt="Blinkr Logo"
              className="h-24 w-auto object-contain bg-white p-1 rounded"
              style={{ maxWidth: "180px", maxHeight: "100px" }}
            />
          </div>

          {/* Mobile Menu Items (scrollable) */}
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-4 px-6">
              <li>
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="block text-[#003366] text-lg font-medium hover:text-[#E53935] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMobileMenu}
                  className="block text-[#003366] text-lg font-medium hover:text-[#E53935] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/repay"
                  onClick={toggleMobileMenu}
                  className="block text-[#003366] text-lg font-medium hover:text-[#E53935] transition-colors"
                >
                  Repay
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="block text-[#003366] text-lg font-medium hover:text-[#E53935] transition-colors"
                >
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Apply Now Button (fixed at bottom) */}
          {/* <div className="p-6 border-t border-gray-200">
            <Link 
              to="/mobile-verification" 
              onClick={toggleMobileMenu}
              className="block w-full"
            >
              <div className="bg-[#003366] px-8 py-4 rounded-full font-bold text-white border border-[#003366] hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-lg">Apply Now</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          </div> */}


{/* Mobile Apply Now Button (fixed at bottom) */}
<div className="mt-auto px-6 pb-6 pt-4 bg-white sticky bottom-0 z-50">
  <Link 
    to="/mobile-verification" 
    onClick={toggleMobileMenu}
    className="block w-full"
  >
    <div className="bg-[#003366] px-6 py-3 rounded-full font-bold text-white border border-[#003366] hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 flex items-center justify-center gap-2">
      <span className="text-lg">Apply Now</span>
      <svg
        className="w-5 h-5 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </div>
  </Link>
</div>











        </div>
      </div>
    </>
  );
};

export default Navbar;
