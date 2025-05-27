import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu if screen becomes large
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleScroll = () => {
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleApplyNow = () => {
    console.log('apply now clicked');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top container with responsive padding */}
      <div className="w-full bg-[#D9D9D9] py-1 sm:py-2 px-2 sm:px-4 lg:px-8">
        <nav className="max-w-full mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl rounded-bl-2xl sm:rounded-bl-3xl shadow flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 h-16 sm:h-18 md:h-20">
          
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center h-full flex-shrink-0">
            <img
              src="/newnavlogo.png"
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center w-full">
            {/* Centered Menu */}
            <div className="flex-1 flex justify-center space-x-4 xl:space-x-8 font-poppins">
              <Link 
                to="/" 
                className="text-[#303030] font-medium hover:text-[#E53935] transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-[#303030] font-medium hover:text-[#E53935] transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                About Us
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-[#303030] font-medium hover:text-[#E53935] transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                How It Works
              </Link>
              <Link 
                to="/repay" 
                className="text-[#303030] font-medium hover:text-[#E53935] transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                Repay
              </Link>
              <Link 
                to="/contact" 
                className="text-[#303030] font-medium hover:text-[#E53935] transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Right Side Apply Now Button */}
            <Link to="/mobile-verification" className="ml-2 xl:ml-4 flex-shrink-0">
              <button 
                onClick={handleApplyNow} 
                className="bg-[#003366] text-white px-4 xl:px-6 py-2 font-bold hover:bg-[#E53935] transition-all duration-300 rounded-t-xl rounded-bl-xl rounded-br-none text-sm xl:text-base whitespace-nowrap"
              >
                Apply Now
              </button>
            </Link>
          </div>

          {/* Tablet Menu (md screens) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <Link 
              to="/mobile-verification" 
              className="flex-shrink-0"
            >
              <button 
                onClick={handleApplyNow} 
                className="bg-[#003366] text-white px-3 py-1.5 font-bold hover:bg-[#E53935] transition-all duration-300 rounded-t-lg rounded-bl-lg rounded-br-none text-sm whitespace-nowrap"
              >
                Apply Now
              </button>
            </Link>
            
            <button 
              onClick={toggleMobileMenu} 
              className="text-[#003366] focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger (small screens) */}
          <div className="md:hidden flex items-center space-x-2">
            <Link 
              to="/mobile-verification" 
              className="flex-shrink-0"
            >
              <button 
                onClick={handleApplyNow} 
                className="bg-[#003366] text-white px-2 py-1 font-bold hover:bg-[#E53935] transition-all duration-300 rounded-t-lg rounded-bl-lg rounded-br-none text-xs whitespace-nowrap"
              >
                Apply
              </button>
            </Link>
            
            <button 
              onClick={toggleMobileMenu} 
              className="text-[#003366] focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
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
        onClick={closeMobileMenu}
      />

      {/* Mobile/Tablet Menu Sidebar */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-screen w-[85%] sm:w-[70%] md:w-[60%] max-w-sm bg-white border-l border-[#003366] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-screen">
          {/* Mobile Menu Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
            <img
              src="/newlogo.png"
              alt="Blinkr Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain bg-white p-1 rounded"
              style={{ maxWidth: "160px", maxHeight: "80px" }}
            />
            <button 
              onClick={closeMobileMenu}
              className="text-[#003366] hover:text-[#E53935] p-1"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 sm:py-6">
            <ul className="space-y-3 sm:space-y-4 px-4 sm:px-6">
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-[#003366] text-base sm:text-lg font-medium hover:text-[#E53935] transition-colors duration-200 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block text-[#003366] text-base sm:text-lg font-medium hover:text-[#E53935] transition-colors duration-200 py-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  onClick={closeMobileMenu}
                  className="block text-[#003366] text-base sm:text-lg font-medium hover:text-[#E53935] transition-colors duration-200 py-2"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/repay"
                  onClick={closeMobileMenu}
                  className="block text-[#003366] text-base sm:text-lg font-medium hover:text-[#E53935] transition-colors duration-200 py-2"
                >
                  Repay
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block text-[#003366] text-base sm:text-lg font-medium hover:text-[#E53935] transition-colors duration-200 py-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Apply Now Button */}
          <div className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6 pt-4 bg-white border-t border-gray-100">
            <Link 
              to="/mobile-verification" 
              onClick={closeMobileMenu}
              className="block w-full"
            >
              <div className="bg-[#003366] px-4 py-3 font-bold text-white border border-[#003366] hover:bg-[#E53935] hover:border-[#E53935] transition-all duration-300 flex items-center justify-center gap-2 rounded-t-xl rounded-bl-xl rounded-br-none">
                <span className="text-sm sm:text-base">Apply Now</span>
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