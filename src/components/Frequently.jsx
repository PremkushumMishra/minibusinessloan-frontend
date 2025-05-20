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
      "You need your Aadhaar card, business registration documents, bank statements of last 3 months, and basic KYC documents. The process is completely digital.",
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
    answer: `You need to provide:\n\n- Aadhaar card\n- PAN card\n- Bank statement (last 3 months)\n- Proof of business (GST certificate/shop license if available)`,
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
    <div className="bg-[#f4f4f4] min-h-0 flex items-start justify-center py-2 sm:py-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16 px-0 sm:px-4">
        {/* Left Column */}
        <div className="md:w-1/3 flex flex-col justify-start mb-4 md:mb-0 animate-slide-from-left mobile-center-text">
          <h2
            className="mb-2 text-2xl sm:text-3xl md:text-4xl font-semibold animate-grow"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#0D4183",
            }}
          >
            Common Questions
          </h2>
          <p
            className="mb-4 text-base sm:text-lg animate-fade-in"
            style={{
              fontFamily: "Poppins",
              fontWeight: 200,
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            Find the answers to frequently asked question here.
          </p>
          <span
            className="mb-6 text-base sm:text-lg animate-fade-in"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            {/* Need further support */}
          </span>
        </div>
        {/* Right Column */}
        <div className="md:w-2/4 flex flex-col gap-3 sm:gap-4 animate-slide-from-right mobile-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className={`transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md ${
                  isOpen ? "bg-[#184785]" : "bg-white"
                } animate-fade-in mobile-faq-card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all duration-300 ${
                    isOpen ? "text-white" : "text-[#184785] hover:bg-[#e9eef6]"
                  } font-semibold text-base sm:text-lg rounded-xl`}
                  onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                >
                  <span className="text-left">{faq.question}</span>
                  <span
                    className={`ml-4 transition-all duration-300 transform ${
                      isOpen
                        ? "bg-white text-[#0D4059] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-3xl sm:text-5xl rotate-180"
                        : "text-3xl sm:text-5xl text-[#0D4059] flex items-center justify-center"
                    }`}
                    style={{ fontWeight: 400 }}
                  >
                    {isOpen ? "﹣" : "﹢"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-white text-sm sm:text-base animate-slide-down">
                    <div className="whitespace-pre-line text-white/90">
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
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-from-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes grow {
          0% {
            transform: scale(0.8);
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
          animation: slide-down 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-grow {
          animation: grow 0.6s ease-out forwards;
        }
        /* Mobile styles */
        @media (max-width: 768px) {
          .mobile-center-text {
            align-items: center;
            text-align: center;
          }
          .mobile-faq-list {
            width: 100%;
            gap: 16px;
          }
          .mobile-faq-card {
            width: 100%;
            margin: 0;
            border-radius: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            animation: slide-up 0.5s cubic-bezier(0.4,0,0.2,1) both;
          }
        }
      `}</style>
    </div>
  );
};

export default Frequently;
