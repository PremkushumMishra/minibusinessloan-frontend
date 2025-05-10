import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is the loan tenure for business loans?",
    answer:
      "We offer business loans with a fixed tenure of 100 days, designed to provide quick financial support for your business needs.",
  },
  {
    id: 2,
    question: "How long does the loan approval process take?",
    answer:
      "Our entire loan process, from application to disbursement, is completed within 30 minutes. We use advanced technology to ensure quick verification and approval.",
  },
  {
    id: 3,
    question: "What documents are required for a business loan?",
    answer:
      "You need your Aadhaar card, business registration documents, bank statements of last 3 months, and basic KYC documents. The process is completely digital.",
  },
  {
    id: 4,
    question: "What is the maximum loan amount I can get?",
    answer:
      "Loan amounts are determined based on your business turnover and credit profile. We offer flexible loan amounts to meet your business requirements.",
  },
  {
    id: 5,
    question: "Is there any prepayment penalty?",
    answer:
      "No, we don't charge any prepayment penalty. You can repay your loan before the 100-day tenure without any additional charges.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-[#003366] rounded-xl shadow-lg">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-sm transition duration-300"
          >
            <div
              className={`flex items-center justify-between p-5 cursor-pointer transition-all duration-300 rounded-xl ${
                openIndex === faq.id
                  ? "bg-[#E53935] text-white"
                  : "bg-white text-[#003366]"
              } hover:bg-[#E53935] hover:text-white`}
              onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
            >
              <span className="font-semibold text-lg">{faq.id}-</span>
              <span className="flex-1 text-center font-medium">
                {faq.question}
              </span>
              <div className="p-2 bg-white rounded-full shadow-md transition-transform duration-300">
                <FaArrowRight
                  className={`text-[#003366] transform transition-transform duration-300 ${
                    openIndex === faq.id ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            {openIndex === faq.id && (
              <div className="p-5 bg-white text-[#003366] border-t border-gray-200 rounded-b-xl transition-all duration-300 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequently;
