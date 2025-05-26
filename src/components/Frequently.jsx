import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the loan tenure for business loans?",
    answer:
      "We offer business loans with a fixed tenure of 100 days, designed to provide quick financial support for your business needs.",
  },
  {
    id: 2,
    question: "What documents are required for a business loan?",
    answer:
      "You need your Aadhaar card, business registration documents, bank statements of last 6 months, and basic KYC documents. The process is completely digital.",
  },
  {
    id: 5,
    question: "Who is eligible for a mini business loan?",
    answer:
      "Any small business owner, street vendor, or self-employed individual with basic KYC and business proof is eligible.",
  },
  {
    id: 6,
    question: "What documents are required?",
    answer: `You need to provide:\n\n- Aadhaar card\n- PAN card\n- Bank statement (last 3 months)\n- UDHYAM_NO, Proof of business (GST certificate/shop license if available)`,
  },
  {
    id: 11,
    question: "Will this affect my credit score?",
    answer:
      "Yes, timely repayment will positively impact your credit history, while delays can hurt it.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white min-h-0 flex items-start justify-center py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 justify-between">
        {/* Left Column */}
        <div className="lg:w-1/3 flex flex-col justify-start mb-6 lg:mb-0 animate-slide-from-left text-center lg:text-left">
          <h2
            className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold animate-grow leading-tight"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              color: "#0D4183",
            }}
          >
            Common Questions
          </h2>
          <p
            className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg animate-fade-in leading-relaxed max-w-md mx-auto lg:mx-0"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              color: "#000000",
            }}
          >
            Find the answers to frequently asked questions here.
          </p>
        </div>
        
        {/* Right Column */}
        <div className="lg:w-2/3 flex flex-col gap-3 sm:gap-4 animate-slide-from-right">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className={`transition-all duration-300 overflow-hidden rounded-2xl shadow-sm hover:shadow-md ${
                  isOpen ? "bg-[#184785]" : "bg-[#D9D9D9]"
                } animate-fade-in transform hover:scale-[1.02] active:scale-[0.98]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className={`w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                    isOpen ? "text-white" : "text-[#184785]"
                  } font-semibold text-sm sm:text-base lg:text-lg rounded-2xl text-left`}
                  onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="flex-1 pr-4 leading-relaxed">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 transition-all duration-300 transform ${
                      isOpen
                        ? "bg-white text-[#0D4059] rounded-full w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl rotate-180"
                        : "text-2xl sm:text-3xl lg:text-4xl text-[#0D4059] flex items-center justify-center"
                    }`}
                    style={{ fontWeight: 400 }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 text-white text-xs sm:text-sm lg:text-base animate-slide-down"
                  >
                    <div className="whitespace-pre-line text-white/90 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-from-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-from-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes grow {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slide-from-left {
          animation: slide-from-left 0.6s ease-out forwards;
        }
        
        .animate-slide-from-right {
          animation: slide-from-right 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-grow {
          animation: grow 0.6s ease-out forwards;
        }
        
        /* Enhanced mobile responsiveness */
        @media (max-width: 640px) {
          .animate-slide-from-left,
          .animate-slide-from-right {
            animation: fade-in 0.5s ease-out forwards;
          }
        }
        
        /* Tablet specific adjustments */
        @media (min-width: 641px) and (max-width: 1023px) {
          .animate-slide-from-left {
            animation-delay: 0.1s;
          }
          .animate-slide-from-right {
            animation-delay: 0.2s;
          }
        }
        
        /* Improve touch targets on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 60px;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Frequently;