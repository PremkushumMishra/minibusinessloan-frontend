import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-[#f6f8fc] fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 fade-in-up fade-in-up-delay-1">
        {/* Left: Phone Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex items-center justify-center">
            <img
              src="/howitpic.png" // <-- replace with your phone illustration image path
              alt="How it works"
              className="w-80 h-auto z-10"
            />
            {/* Optional: Decorative shape behind phone */}
            <div className="absolute -z-10 left-[-40px] top-1/2 -translate-y-1/2 w-72 h-72 bg-[#00BCD4] rounded-full opacity-40" />
          </div>
        </div>
        {/* Right: Steps Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Step 1 */}
          <div>
            <span className="bg-[#003366] text-white text-base font-semibold px-3 py-1 rounded-md  inline-block">
              Step-1
            </span>
            <div className="text-2xl text-[#444] font-bold mt-2">
              Apply
            </div>
          </div>
          {/* Step 2 */}
          <div>
            <span className="bg-[#003366] text-white text-base font-semibold px-3 py-1 rounded-md  inline-block">
              Step-2
            </span>
            <div className="text-2xl text-[#444] font-bold mt-2">
              Document Verification
            </div>
          </div>
          {/* Step 3 */}
          <div>
            <span className="bg-[#003366] text-white text-base font-semibold px-3 py-1 rounded-md inline-block">
              Step-3
            </span>
            <div className="text-2xl text-[#444] font-bold mt-2">
              Disbursement
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 fade-in-up fade-in-up-delay-2">
        <h2 className="text-3xl font-bold text-[#003366] text-center mb-2">Why Choose Us?</h2>
        <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Mobile Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 32 32">
                <rect width="24" height="36" x="4" y="-2" rx="6" fill="#fff"/>
                <rect x="8" y="2" width="16" height="28" rx="4" fill="#003366" stroke="#fff" strokeWidth="2.5"/>
                <circle cx="16" cy="26" r="2" fill="#fff"/>
                <rect x="12" y="6" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="10" width="8" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Mobile-Optimized</div>
              <div className="text-gray-600 text-base">Access and manage your account easily from your mobile device, wherever you are.</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Onboarding Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 32 32">
                <rect width="24" height="36" x="4" y="-2" rx="6" fill="#fff"/>
                <rect x="8" y="2" width="16" height="28" rx="4" fill="#003366" stroke="#fff" strokeWidth="2.5"/>
                <rect x="12" y="8" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="14" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="20" width="5" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Quick Signup</div>
              <div className="text-gray-600 text-base">Register and get started in minutes—no paperwork, no waiting.</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Purchasing Power Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 32 32">
                <rect width="24" height="36" x="4" y="-2" rx="6" fill="#fff"/>
                <rect x="8" y="2" width="16" height="28" rx="4" fill="#003366" stroke="#fff" strokeWidth="2.5"/>
                <rect x="12" y="8" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="14" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="20" width="5" height="2" rx="1" fill="#fff"/>
                <circle cx="24" cy="24" r="4" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <text x="22" y="27" fontSize="1.5em" fill="#fff" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Higher Credit Limits</div>
              <div className="text-gray-600 text-base">Get access to credit from ₹5,000 up to ₹10 lakhs as per your eligibility.</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* User Experience Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 32 32">
                <rect width="24" height="36" x="4" y="-2" rx="6" fill="#fff"/>
                <rect x="8" y="2" width="16" height="28" rx="4" fill="#003366" stroke="#fff" strokeWidth="2.5"/>
                <circle cx="24" cy="8" r="4" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <rect x="12" y="8" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="14" width="8" height="2" rx="1" fill="#fff"/>
                <rect x="12" y="20" width="5" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Smooth Checkout</div>
              <div className="text-gray-600 text-base">Enjoy one-tap payments with top brands, thanks to direct merchant integration.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-16 fade-in-up fade-in-up-delay-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Pricing Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 80 80">
                <rect x="10" y="20" width="60" height="40" rx="10" fill="#fff"/>
                <rect x="20" y="30" width="40" height="8" rx="2" fill="#fff"/>
                <rect x="20" y="44" width="20" height="8" rx="2" fill="#fff"/>
                <circle cx="60" cy="40" r="8" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <text x="56" y="45" fontSize="2em" fill="#fff" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Transparent Pricing</div>
              <div className="text-gray-600 text-base">No extra interest charged if you repay within 100 days.</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Omni-Channel Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 80 80">
                <rect x="15" y="25" width="50" height="30" rx="8" fill="#fff"/>
                <rect x="22" y="32" width="16" height="16" rx="3" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <rect x="42" y="32" width="16" height="16" rx="3" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <rect x="32" y="18" width="16" height="10" rx="3" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <rect x="28" y="50" width="24" height="4" rx="2" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Omni-Channel Support</div>
              <div className="text-gray-600 text-base">Use our platform on web, mobile, or in-store—whichever suits you best.</div>
            </div>
          </div>
          {/* Card 3 */}
          {/* <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10"> */}
              {/* Assortment Icon */}
              {/* <svg width="100" height="100" fill="none" viewBox="0 0 80 80">
                <rect x="18" y="28" width="44" height="24" rx="6" fill="#fff"/>
                <rect x="24" y="36" width="32" height="8" rx="2" fill="#fff"/>
                <circle cx="60" cy="40" r="5" fill="#003366" stroke="#fff" strokeWidth="2"/>
                <rect x="50" y="48" width="10" height="4" rx="2" fill="#fff"/>
                <rect x="30" y="48" width="10" height="4" rx="2" fill="#fff"/>
              </svg> */}
            {/* </div> */}
            {/* <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Wide Product Selection</div>
              <div className="text-gray-600 text-base">Benefit from a large variety of products through our merchant partners.</div>
            </div> */}
          {/* </div> */}
          {/* Card 4 */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* Hasslefree Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 80 80">
                <ellipse cx="40" cy="56" rx="28" ry="12" fill="#fff"/>
                <path d="M20 56c0-8 20-16 20-16s20 8 20 16" stroke="#fff" strokeWidth="2" fill="none"/>
                <rect x="32" y="60" width="16" height="4" rx="2" fill="#fff"/>
                <rect x="36" y="48" width="8" height="8" rx="2" fill="#003366" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Easy Payments & Reconciliation</div>
              <div className="text-gray-600 text-base">No manual ledger work—returns and payment tracking are handled for you.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 