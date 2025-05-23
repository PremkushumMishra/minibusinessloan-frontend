import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Frequently from "../components/Frequently";

const HowItWorks = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen pb-28 bg-[#E8E8E8] fade-in-up overflow-x-hidden">
      {/* Hero Section - Made Responsive */}
      <div className="w-full flex flex-col items-center justify-center pt-8 sm:pt-12 pb-12 sm:pb-16 bg-gradient-to-br from-[#D7E1F3] to-[#F3D7D7] px-4">
        {/* Responsive Heading */}
        <h1
          className="text-center font-poppins text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 px-2"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            lineHeight: "115%",
            letterSpacing: 0,
            color: "#0D4183",
          }}
        >
          Give a Quick Start Your Business
          <br className="hidden sm:block" />
          In Just 3 Easy Steps
        </h1>

        {/* Responsive Steps + Phone Section */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Desktop/Tablet Layout - Hidden on mobile */}
          <div className="relative hidden md:flex items-center justify-center h-[400px]">
            {/* Mobile Phone in Center */}
            <div className="w-[199px] h-full">
              <img 
                src="/mobilegif1-ezgif.com-effects.gif" 
                alt="Mobile Phone" 
                className="w-full h-full object-cover rounded-[1.75rem]" 
              />
            </div>
            {/* <div
              className="w-full h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat absolute top-0"
              style={{
                backgroundImage: "url('/mobilegif.gif')",
                zIndex: 2
              }}
            ></div> */}
            {/* <div
              className="w-full h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat absolute top-0"
              style={{
                backgroundImage: "url('/zifbg.png')",
                zIndex: 1
              }}
            ></div> */}

            {/* Step 1 - Left Top */}
            <div className="absolute left-4 lg:left-15 top-12 flex flex-col items-end max-w-xs">
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow px-4 py-2 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg text-3xl lg:text-5xl font-poppins">
                  1
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Apply
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Fill out a simple application form in minutes.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Top Right */}
            <div className="absolute right-4 lg:right-15 top-24 flex flex-col items-start max-w-xs">
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow px-4 py-2 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg text-3xl lg:text-5xl font-poppins">
                  2
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Document Verification
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins max-w-[220px]">
                    Upload your documents securely for quick verification.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Bottom Left */}
            <div className="absolute left-4 lg:left-16 bottom-24 flex flex-col items-end max-w-xs">
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow px-4 py-2 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg text-3xl lg:text-5xl font-poppins">
                  3
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Eligibility Check
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Check your eligibility and get instant approval.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Bottom Right */}
            <div className="absolute right-4 lg:right-15 bottom-9 flex flex-col items-start max-w-xs">
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow px-4 py-2 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg text-3xl lg:text-5xl font-poppins">
                  4
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Disbursement
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Get your loan amount directly in your bank account.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Phone on top, steps stacked below */}
          <div className="md:hidden flex flex-col items-center">
            {/* Mobile Phone Image on Top */}
            <div className="w-[199px] h-[400px] mx-auto mb-6">
              <img 
                src="/mobilegif1-ezgif.com-effects.gif" 
                alt="Mobile Phone" 
                className="w-full h-full object-cover rounded-[1.75rem]" 
              />
            </div>

            {/* Steps Stacked Below - Mobile View */}
            <div className="space-y-4 w-full px-2 sm:px-4">
              {/* Step 1 Mobile */}
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow p-3 sm:p-4 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-t-2xl rounded-bl-2xl text-2xl sm:text-3xl font-poppins font-bold">
                  1
                </span>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Apply
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Fill out a simple application form in minutes.
                  </div>
                </div>
              </div>

              {/* Step 2 Mobile */}
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow p-3 sm:p-4 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-t-2xl rounded-bl-2xl text-2xl sm:text-3xl font-poppins font-bold">
                  2
                </span>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Document Verification
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Upload your documents securely for quick verification.
                  </div>
                </div>
              </div>

              {/* Step 3 Mobile */}
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow p-3 sm:p-4 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-t-2xl rounded-bl-2xl text-2xl sm:text-3xl font-poppins font-bold">
                  3
                </span>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Eligibility Check
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Check your eligibility and get instant approval.
                  </div>
                </div>
              </div>

              {/* Step 4 Mobile */}
              <div className="bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl shadow p-3 sm:p-4 flex items-center gap-3">
                <span className="text-[#0D4183] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-t-2xl rounded-bl-2xl text-2xl sm:text-3xl font-poppins font-bold">
                  4
                </span>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#0D4183",
                    }}
                  >
                    Disbursement
                  </div>
                  <div className="text-[#0D4183] text-xs sm:text-sm font-poppins">
                    Get your loan amount directly in your bank account.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Why Choose Us Section */}
<div
  className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 rounded-bl-4xl rounded-t-4xl mb-10 fade-in-up fade-in-up-delay-2 scroll-reveal py-12"
  ref={addToRefs}
  style={{ background: "#0D4183" }}
>
  <div className="max-w-6xl mx-auto px-8">
    <h2
      className="font-poppins text-center mb-8"
      style={{
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "40px",
        lineHeight: "140%",
        letterSpacing: 0,
        color: "white",
      }}
    >
      Why Choose Us?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Mobile-Optimized",
          desc: "Access and manage your account easily from your mobile device, wherever you are.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          title: "Quick Signup",
          desc: "Register and get started in minutes—no longer waiting.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8.5" cy="7" r="4.5" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 8L23 11L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Higher Credit Limits",
          desc: "Get access to credit from ₹5,000 up to ₹5 lakhs as per your eligibility.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Smooth Checkout",
          desc: "Enjoy one-tap payments with top brands, thanks to direct merchant integration.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 20H20M3 3H4.5L5.5 17H20M7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17ZM17 17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17C13 16.4696 13.2107 15.9609 13.5858 15.5858C13.9609 15.2107 14.4696 15 15 15C15.5304 15 16.0391 15.2107 16.4142 15.5858C16.7893 15.9609 17 16.4696 17 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Transparent Pricing",
          desc: "No extra penalty charged if you repay within 100 days.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Omni-Channel Support",
          desc: "Use our platform on web or mobile – whichever suits you best.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Easy Payments & Reconciliation",
          desc: "No manual ledger work—returns and payment tracking are handled for you.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          title: "Hasslefree payment and Reconciliation",
          desc: "No need to maintain ledgers for returns/cancellations.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
      ].map((f, i) => (
        <div
          key={i}
          className="group rounded-t-2xl rounded-bl-2xl shadow-md flex flex-col items-left p-6 bg-white transition-all duration-300 hover:bg-[#E53935] cursor-pointer"
        >
          {/* Icon */}
          <div className="w-14 h-14 bg-[#0D418399] group-hover:bg-white rounded-full flex items-center justify-center mb-4 p-3 transition-all duration-300">
            <span className="w-8 h-8 flex items-center justify-center text-white group-hover:text-[#E53935]">
              {f.icon}
            </span>
          </div>
          {/* Title */}
          <div
            className="mb-2 text-left w-full text-[#0D4183] group-hover:text-white font-poppins font-medium text-[20px] leading-none transition-colors duration-300"
          >
            {f.title}
          </div>
          {/* Description */}
          <div
            className="text-left text-sm text-[#0D4183] group-hover:text-white font-poppins font-normal leading-relaxed transition-colors duration-300"
          >
            {f.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      <Frequently />
      {/* Eligibility Criteria Section */}
      <div ref={addToRefs} className="mt-16 scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-t-2xl rounded-bl-2xl shadow-xl">
          <h2
            className="font-poppins text-center mb-3"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#0D4183",
            }}
          >
            Are You Eligible?
          </h2>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-10 animate-divider-draw" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg text-gray-700 px-4 md:px-8">
            <div className="flex items-start space-x-3">
              <svg
                className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Indian Citizen residing in India.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Age between 21 to 60 years.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Self-Employed with regular income.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Good credit history (CIBIL score considered).</span>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            *Eligibility criteria may vary based on the loan amount and other
            factors. Final approval is subject to our credit assessment.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div ref={addToRefs} className="mt-16 scroll-reveal">
        <div className="max-w-5xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-r from-[#003366] to-[#004080] rounded-t-3xl rounded-bl-3xl shadow-2xl">
          <h2 className="text-3xl text-white sm:text-4xl font-poppins">
            <span className="block">
              Ready to fuel your business for growth?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Our streamlined process makes getting a business loan faster and
            easier than ever. Take the next step today!
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/mobile-verification" // Replace with your actual apply loan page URL
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-t-2xl rounded-bl-2xl text-[#003366] bg-white hover:bg-indigo-50 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#003366] focus:ring-white"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.7s forwards;
        }
        .fade-in-up-delay-1 { animation-delay: 0.2s; }
        .fade-in-up-delay-2 { animation-delay: 0.4s; }
        .fade-in-up-delay-3 { animation-delay: 0.6s; }
        .fade-in-up-delay-4 { animation-delay: 0.8s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }

        /* Scroll Reveal Animation */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 2.2s ease-out, transform 4.2s ease-out;
        }
        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Typing Animation Cursor */
        .apply-typing-effect {
          min-height: 1.2em;
          display: inline-block; 
          width: 100%;
        }
        .typing-active::after {
          50% { opacity: 0; }
        }

        /* Floating Phone Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Divider Draw Animation */
        .animate-divider-draw {
          width: 0;
          animation: drawDivider 0.8s ease-out forwards;
          animation-delay: 0.5s;
        }
        .scroll-reveal.is-visible .animate-divider-draw {
            animation-play-state: running;
        }
        @keyframes drawDivider {
          to { width: 6rem; }
        }

        /* Card Hover Effect */
        .card-hover-effect {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .card-hover-effect:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* Icon Pop Animation */
        .icon-container svg {
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .scroll-reveal.is-visible .icon-container svg {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
