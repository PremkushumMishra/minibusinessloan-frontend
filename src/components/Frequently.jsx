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
  // {
  //   id: 3,
  //   question: "What is the maximum loan amount I can get?",
  //   answer:
  //     "Loan amounts are determined based on your business turnover and credit profile. We offer flexible loan amounts to meet your business requirements.",
  // },
 
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
  // {
  //   id: 7,
  //   question: "How do I repay the loan?",
  //   answer:
  //     "You can choose between daily or weekly repayment options through UPI, bank transfer, or auto-debit.",
  // },
  // {
  //   id: 8,
  //   question: "Is there a processing fee?",
  //   answer:
  //     "Yes, a small processing fee is deducted from the loan amount before disbursal. The exact amount depends on the loan size.",
  // },
  // {
  //   id: 9,
  //   question: "Can I prepay my loan?",
  //   answer:
  //     "Yes, you can repay the loan early with zero or minimal foreclosure charges depending on your plan.",
  // },
  // {
  //   id: 10,
  //   question: "How long does it take to get the loan?",
  //   answer:
  //     "Once approved, the loan amount is usually disbursed within 30 minutes to your bank account.",
  // },
  // {
  //   id: 11,
  //   question: "Will this affect my credit score?",
  //   answer:
  //     "Yes, timely repayment will positively impact your credit history, while delays can hurt it.",
  // },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#f4f4f4] min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-49">
        {/* Left Column */}
        <div className="md:w-1/3 flex flex-col justify-start">
          <h2
            className="mb-2"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#0D4183",
            }}
          >
            Common question
          </h2>
          <p
            className="mb-4"
            style={{
              fontFamily: "Poppins",
              fontWeight: 200,
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            Find the answers to frequently asked question here.
          </p>
          <span
            className="mb-6"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            Need further support
          </span>
        </div>
        {/* Right Column */}
        <div className="md:w-2/4 flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div
                key={faq.id}
                className={`transition-all duration-200 rounded-xl overflow-hidden shadow-sm ${
                  isOpen ? "bg-[#184785]" : "bg-white"
                }`}
              >
                <button
                  className={`w-full flex items-center justify-between px-6 py-5 focus:outline-none transition-all duration-200 ${
                    isOpen ? "text-white" : "text-[#184785] hover:bg-[#e9eef6]"
                  } font-semibold text-lg rounded-xl`}
                  onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`ml-4 transition-all duration-200 ${
                      isOpen
                        ? "bg-white text-[#0D4059] rounded-full w-10 h-10 flex items-center justify-center text-5xl"
                        : "text-5xl text-[#0D4059] flex items-center justify-center"
                    }`}
                    style={{ fontWeight: 400 }}
                  >
                    {isOpen ? "﹣" : "﹢"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-white text-base">
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
    </div>
  );
};

export default Frequently;
