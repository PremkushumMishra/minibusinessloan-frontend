import React from 'react';
import howitworks from '../../public/howitpic.png';

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-[#f6f8fc] fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 fade-in-up fade-in-up-delay-1">
        {/* Left: Phone Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex items-center justify-center">
            <img
              src={howitworks} // <-- replace with your phone illustration image path
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
          {/* Card 1: Mobile-Optimized */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* New Mobile Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <rect x="18" y="8" width="34" height="54" rx="8" fill="#fff"/>
                <rect x="22" y="12" width="26" height="46" rx="6" fill="#00BCD4"/>
                <circle cx="35" cy="52" r="3" fill="#fff"/>
                <rect x="28" y="18" width="14" height="2.5" rx="1.25" fill="#fff"/>
                <rect x="28" y="24" width="14" height="2.5" rx="1.25" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Mobile-Optimized</div>
              <div className="text-gray-600 text-base">Access and manage your account easily from your mobile device, wherever you are.</div>
            </div>
          </div>
          {/* Card 2: Quick Signup */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* New Signup Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <circle cx="35" cy="28" r="12" fill="#00BCD4"/>
                <rect x="16" y="44" width="38" height="14" rx="7" fill="#fff"/>
                <rect x="22" y="50" width="26" height="4" rx="2" fill="#00BCD4"/>
                <circle cx="35" cy="28" r="6" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Quick Signup</div>
              <div className="text-gray-600 text-base">Register and get started in minutes—no paperwork, no waiting.</div>
            </div>
          </div>
          {/* Card 3: Higher Credit Limits */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* New Credit Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <rect x="14" y="22" width="42" height="26" rx="6" fill="#00BCD4"/>
                <rect x="20" y="28" width="30" height="6" rx="3" fill="#fff"/>
                <circle cx="35" cy="35" r="8" fill="#fff"/>
                <text x="31" y="40" fontSize="1.5em" fill="#00BCD4" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Higher Credit Limits</div>
              <div className="text-gray-600 text-base">Get access to credit from ₹5,000 up to ₹10 lakhs as per your eligibility.</div>
            </div>
          </div>
          {/* Card 4: Smooth Checkout */}
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* New Checkout Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <rect x="18" y="24" width="34" height="22" rx="6" fill="#00BCD4"/>
                <rect x="24" y="30" width="22" height="4" rx="2" fill="#fff"/>
                <rect x="24" y="38" width="14" height="4" rx="2" fill="#fff"/>
                <circle cx="53" cy="35" r="5" fill="#fff"/>
                <rect x="30" y="44" width="10" height="2" rx="1" fill="#fff"/>
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
              {/* New Transparent Pricing Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <rect x="25" y="25" width="50" height="50" rx="10" fill="#fff" stroke="#00BCD4" strokeWidth="3"/>
                <rect x="35" y="35" width="30" height="8" rx="2" fill="#00BCD4"/>
                <rect x="35" y="48" width="20" height="6" rx="2" fill="#00BCD4"/>
                <circle cx="70" cy="70" r="10" fill="#00BCD4" stroke="#fff" strokeWidth="2"/>
                <text x="65" y="75" fontSize="1.5em" fill="#fff" fontWeight="bold">₹</text>
                <rect x="60" y="60" width="8" height="8" rx="2" fill="#fff" stroke="#00BCD4" strokeWidth="2"/>
                <path d="M64 64 l4 4" stroke="#00BCD4" strokeWidth="2"/>
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
              {/* New Omni-Channel Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <rect x="15" y="60" width="25" height="20" rx="4" fill="#00BCD4" stroke="#fff" strokeWidth="3"/>
                <rect x="60" y="20" width="25" height="40" rx="6" fill="#00BCD4" stroke="#fff" strokeWidth="3"/>
                <rect x="30" y="20" width="30" height="20" rx="4" fill="#fff" stroke="#00BCD4" strokeWidth="2"/>
                <rect x="40" y="25" width="10" height="10" rx="2" fill="#00BCD4"/>
                <circle cx="27" cy="70" r="3" fill="#fff"/>
                <circle cx="72" cy="35" r="3" fill="#fff"/>
                <path d="M40 80 Q50 90 60 80" stroke="#fff" strokeWidth="2" fill="none"/>
                <path d="M45 40 L45 60" stroke="#00BCD4" strokeWidth="2"/>
                <path d="M55 40 L55 60" stroke="#00BCD4" strokeWidth="2"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1">Omni-Channel Support</div>
              <div className="text-gray-600 text-base">Use our platform on web, mobile, or in-store—whichever suits you best.</div>
            </div>
          </div>
        
          <div className="relative flex items-center">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10">
              {/* New Payments Icon */}
              <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                <rect x="20" y="30" width="60" height="40" rx="10" fill="#fff"/>
                <circle cx="50" cy="50" r="18" fill="#00BCD4"/>
                <text x="43" y="57" fontSize="2.5em" fill="#fff" fontWeight="bold">₹</text>
                <path d="M60 60 l10 10 M70 60 l-10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="70" cy="70" r="7" fill="#fff" stroke="#00BCD4" strokeWidth="2"/>
                <path d="M67 70 l2 2 l4 -4" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" fill="none"/>
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