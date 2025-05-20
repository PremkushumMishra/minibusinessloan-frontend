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

      {/* Why Choose Us Section */}
      <div className="mt-16 fade-in-up fade-in-up-delay-2 scroll-reveal" ref={addToRefs} style={{ background: '#D9D9D9' }}>
        <h2 
          className="font-poppins text-center mb-8"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '140%',
            letterSpacing: 0,
            color: '#0D4183',
          }}
        >
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Mobile-Optimized",
              desc: "Access and manage your account easily from your mobile device, wherever you are.",
              icon: "mobileicon.png",
            },
            {
              title: "Quick Signup",
              desc: "Register and get started in minutes—no longer waiting.",
              icon: "mobileicon.png",
            },
            {
              title: "Higher Credit Limits",
              desc: "Get access to credit from ₹5,000 up to ₹10 lakhs as per your eligibility.",
              icon: "mobileicon.png",
            },
            {
              title: "Smooth Checkout",
              desc: "Enjoy one-tap payments with top brands, thanks to direct merchant integration.",
              icon: "mobileicon.png",
            },
            {
              title: "Transparent Pricing",
              desc: "No extra penalty charged if you repay within 100 days.",
              icon: "mobileicon.png",
            },
            {
              title: "Omni-Channel Support",
              desc: "Use our platform on web or mobile – whichever suits you best.",
              icon: "mobileicon.png",
            },
            {
              title: "Easy Payments & Reconciliation",
              desc: "No manual ledger work—returns and payment tracking are handled for you.",
              icon: "mobileicon.png",
            },
            {
              title: "Hasslefree payment and Reconciliation",
              desc: "No need to maintain ledgers for returns/cancellations.",
              icon: "mobileicon.png",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`rounded-t-2xl rounded-bl-2xl shadow-md flex flex-col items-left p-6 ${i === 6 ? '' : 'bg-white'}`}
              style={i === 6 ? { background: '#0D4183' } : {}}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#0D418399] rounded-full flex items-center justify-center mb-4">
                <img
                  src={f.icon}
                  alt={f.title + ' icon'}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div 
                className="mb-2 text-left w-full"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: 0,
                  color: i === 6 ? '#fff' : '#0D4183',
                  textAlign: 'left',
                }}
              >
                {f.title}
              </div>
              <div 
                className="text-gray-600 text-sm"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: 0,
                  color: i === 6 ? '#fff' : '#0D4183',
                  textAlign: 'left',
                }}
              >
                {f.desc}
              </div>
            </div>
          ))}
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
                a: "There is no need to provide any collateral or security to get a loan from us. Our loan offerings are designed to be hassle-free and accessible, especially for small and growing businesses. We evaluate applications based on your business potential and financials — not on assets."


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
          transition: opacity 2.2s ease-out, transform 4.2s ease-out;
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