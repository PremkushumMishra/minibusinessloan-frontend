import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [showNavbar, setShowNavbar] = useState(true); // Removed unused variable
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // setShowNavbar(false);
    } else {
      // setShowNavbar(true);
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
      <div className="w-full bg-[#D9D9D9] py-2 px-8">
        <nav className="max-w-7xl mx-auto bg-white rounded-t-3xl rounded-bl-3xl shadow flex items-center justify-between px-4 md:px-8 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="/newnavlogo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center w-full">
            {/* Centered Menu */}
            <div className="flex-1 flex justify-center space-x-8 font-poppins">
              <Link to="/" className="text-[#303030] font-medium hover:text-[#E53935]">Home</Link>
              <Link to="/about" className="text-[#303030] font-medium hover:text-[#E53935]">About Us</Link>
              <Link to="/how-it-works" className="text-[#303030] font-medium hover:text-[#E53935]">How It Works</Link>
              <Link to="/repay" className="text-[#303030] font-medium hover:text-[#E53935]">Repay</Link>
              <Link to="/contact" className="text-[#303030] font-medium hover:text-[#E53935]">Contact Us</Link>
            </div>
            {/* Right Side Apply Now Button */}
            <Link to="/mobile-verification" className="ml-4">
              <button className="bg-[#003366] text-white px-6 py-2 font-bold hover:bg-[#E53935] transition-all rounded-t-xl rounded-bl-xl rounded-br-none">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            {/* Add your hamburger menu logic here */}
            {/* Example: */}
            <button onClick={toggleMobileMenu} className="text-[#003366] focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

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
                  to="/how-it-works"
                  onClick={toggleMobileMenu}
                  className="block text-[#003366] text-lg font-medium hover:text-[#E53935] transition-colors"
                >
                  How it Works
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
          <div className="mt-auto px-6 pb-6 pt-4 bg-white sticky bottom-0 z-50">
            <Link 
              to="/mobile-verification" 
              onClick={toggleMobileMenu}
              className="block w-full"
            >
              <div className="bg-[#003366] px-4 py-2 font-bold text-white border border-[#003366] hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 flex items-center justify-center gap-2 rounded-t-xl rounded-bl-xl rounded-br-none">
                <span className="text-base">Apply Now</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300"
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
