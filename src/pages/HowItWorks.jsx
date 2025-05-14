import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import howitworks from '../../public/howitpic.png';

const HowItWorks = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Optional: remove class if you want fade-out on scroll-up
            // entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of item has to be visible to trigger
      }
    );

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Helper function to add refs to elements
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-gradient-to-br from-[#e0f7fa] via-[#f6f8fc] to-[#e3f2fd] fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 fade-in-up fade-in-up-delay-1">
        {/* Left: Phone Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00BCD4]/30 rounded-full blur-2xl" />
            <img
              // src={howitworks} 
              // <-- replace with your phone illustration image path
              src="/howitpic.png" // <-- replace with your phone illustration image path

              alt="How it works"
              className="w-72 h-auto z-10 drop-shadow-2xl rounded-2xl animate-float"
            />
          </div>
        </div>
        {/* Right: Steps Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-8 flex flex-col gap-8 animate-fade-in-up">
            {/* Step 1 */}
            <div className="flex items-start gap-4 fade-in-up fade-in-up-delay-1">
              <span className="flex items-center justify-center bg-[#003366] text-white text-lg font-bold w-12 h-12 rounded-full shadow-lg border-4 border-[#00BCD4] font-poppins">1</span>
              <div>
                <div className="text-xl md:text-2xl text-[#003366] font-bold font-poppins">Apply</div>
                <div className="text-gray-600 text-base mt-1">Fill out a simple application form in minutes.</div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-4 fade-in-up fade-in-up-delay-2">
              <span className="flex items-center justify-center bg-[#003366] text-white text-lg font-bold w-12 h-12 rounded-full shadow-lg border-4 border-[#00BCD4] font-poppins">2</span>
              <div>
                <div className="text-xl md:text-2xl text-[#003366] font-bold font-poppins">Document Verification</div>
                <div className="text-gray-600 text-base mt-1">Upload your documents securely for quick verification.</div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-4 fade-in-up fade-in-up-delay-3">
              <span className="flex items-center justify-center bg-[#003366] text-white text-lg font-bold w-12 h-12 rounded-full shadow-lg border-4 border-[#00BCD4] font-poppins">3</span>
              <div>
                <div className="text-xl md:text-2xl text-[#003366] font-bold font-poppins">Disbursement</div>
                <div className="text-gray-600 text-base mt-1">Get your loan amount directly in your bank account.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Heading */}
      <div className="mt-16 fade-in-up fade-in-up-delay-2 scroll-reveal" ref={addToRefs}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-2 font-poppins">Why Choose Us?</h2>
        <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mb-10 animate-divider-draw" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1: Mobile-Optimized */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
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
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Mobile-Optimized</div>
              <div className="text-gray-600 text-base">Access and manage your account easily from your mobile device, wherever you are.</div>
            </div>
          </div>
          {/* Card 2: Quick Signup */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
              {/* New Signup Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <circle cx="35" cy="28" r="12" fill="#00BCD4"/>
                <rect x="16" y="44" width="38" height="14" rx="7" fill="#fff"/>
                <rect x="22" y="50" width="26" height="4" rx="2" fill="#00BCD4"/>
                <circle cx="35" cy="28" r="6" fill="#fff"/>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Quick Signup</div>
              <div className="text-gray-600 text-base">Register and get started in minutes—no paperwork, no waiting.</div>
            </div>
          </div>
          {/* Card 3: Higher Credit Limits */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
              {/* New Credit Icon */}
              <svg width="70" height="70" fill="none" viewBox="0 0 70 70">
                <rect x="14" y="22" width="42" height="26" rx="6" fill="#00BCD4"/>
                <rect x="20" y="28" width="30" height="6" rx="3" fill="#fff"/>
                <circle cx="35" cy="35" r="8" fill="#fff"/>
                <text x="31" y="40" fontSize="1.5em" fill="#00BCD4" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-5 py-3 ml-[-15px] z-20 w-full">
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Higher Credit Limits</div>
              <div className="text-gray-600 text-base">Get access to credit from ₹5,000 up to ₹10 lakhs as per your eligibility.</div>
            </div>
          </div>
          {/* Card 4: Smooth Checkout */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
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
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Smooth Checkout</div>
              <div className="text-gray-600 text-base">Enjoy one-tap payments with top brands, thanks to direct merchant integration.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-16 fade-in-up fade-in-up-delay-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
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
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Transparent Pricing</div>
              <div className="text-gray-600 text-base">No extra interest charged if you repay within 100 days.</div>
            </div>
          </div>
          {/* Card 2 */}
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
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
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Omni-Channel Support</div>
              <div className="text-gray-600 text-base">Use our platform on web, mobile, or in-store—whichever suits you best.</div>
            </div>
          </div>
          <div ref={addToRefs} className="relative flex items-center scroll-reveal card-hover-effect">
            <div className="min-w-[120px] min-h-[120px] bg-[#003366] rounded-xl flex items-center justify-center z-10 icon-container">
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
              <div className="font-bold text-2xl text-gray-800 mb-1 font-poppins">Easy Payments & Reconciliation</div>
              <div className="text-gray-600 text-base">No manual ledger work—returns and payment tracking are handled for you.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div ref={addToRefs} className="mt-16 scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-3 font-poppins">Are You Eligible?</h2>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-10 animate-divider-draw" /> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg text-gray-700 px-4 md:px-8">
            <div className="flex items-start space-x-3">
              <svg className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Indian Citizen residing in India.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Age between 21 to 60 years.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Self-Employed with regular income.</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="flex-shrink-0 h-6 w-6 text-[#00BCD4] mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Good credit history (CIBIL score considered).</span>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            *Eligibility criteria may vary based on the loan amount and other factors. Final approval is subject to our credit assessment.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={addToRefs} className="mt-16 scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-3 font-poppins">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-10 animate-divider-draw" />
          <div className="space-y-6 px-4 md:px-8">
            {[ // Array of FAQ items
              {
                q: "How long does the loan approval process take?",
                a: "Once you submit your application and required documents, we aim to process it as quickly as possible. Approval times can vary, but we strive for a decision within as soon as possible for most straightforward applications."
              },
              {
                q: "What kind of documents are typically required?",
                a: "Commonly required documents include KYC (PAN, Aadhaar), business registration proof, bank statements for the last 6 months. The exact list may vary based on your business profile and loan amount."
              },
              {
                q: "Is there any collateral required for the business loan?",
                a: "We offer both secured and unsecured business loans. The need for collateral depends on various factors including the loan amount, your business's creditworthiness, and the specific loan product. Many of our offerings are collateral-free for smaller loan amounts."
              },
              {
                q: "Can I prepay my loan? Are there any charges?",
                a: "Yes, prepayment options are usually available. Prepayment charges, if any, will be clearly mentioned in your loan agreement. We believe in transparency and will provide all necessary details upfront."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex justify-between items-center font-semibold text-lg text-[#003366] cursor-pointer group-hover:text-[#00BCD4] transition-colors">
                  {faq.q}
                  <span className="text-[#00BCD4] group-open:rotate-180 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div ref={addToRefs} className="mt-16 scroll-reveal">
        <div className="max-w-5xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-r from-[#003366] to-[#004080] rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-poppins">
            <span className="block">Ready to fuel your business for growth?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Our streamlined process makes getting a business loan faster and easier than ever. Take the next step today!
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/mobile-verification" // Replace with your actual apply loan page URL
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#003366] bg-white hover:bg-indigo-50 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#003366] focus:ring-white"
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
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Typing Animation Cursor */
        .apply-typing-effect {
          min-height: 1.2em; /* Ensure space for cursor even when empty */
          /* Ensure it doesn't mess with flex alignment if it grows */
          display: inline-block; 
          width: 100%; /* Take full width of its text container */
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
          animation-delay: 0.5s; /* Delay to sync with section fade-in */
        }
        .scroll-reveal.is-visible .animate-divider-draw {
            animation-play-state: running;
        }
        @keyframes drawDivider {
          to { width: 6rem; /* Corresponds to w-24 */ }
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