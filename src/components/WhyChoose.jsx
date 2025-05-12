import React from "react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Quick Loan Approval",
      description:
        "Get your loan approved within 30 mins with minimal documentation and hassle-free process.",
    },
    {
      icon: "₹",
      title: "Competitive Interest Rates",
      description:
        "Enjoy the lowest interest rates in the market with flexible repayment options tailored to your needs.",
    },
    {
      icon: "🛡️",
      title: "100% Secure Process",
      description:
        "Your data is protected with bank-grade security and end-to-end encryption for complete peace of mind.",
    },
    {
      icon: "📱",
      title: "Digital-First Experience",
      description:
        "Complete your entire loan journey online with our user-friendly mobile and web platform.",
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description:
        "Get personalized assistance from our expert loan advisors available 24/7 to help you.",
    },
    {
      icon: "🪟",
      title: "Transparent Process",
      description:
        "No hidden charges or surprises. Clear terms and conditions with complete transparency in all dealings.",
    },
    {
      icon: "🏆",
      title: "10Cr+ Disbursement",
      description:
        "Trusted by thousands of customers with over 10 crores in successful loan disbursements.",
    },
    {
      icon: "🏢",
      title: "20+ Branches",
      description:
        "Wide network of branches across multiple locations for easy access to our services.",
    },
    {
      icon: "👥",
      title: "200+ Team Members",
      description:
        "Large team of experienced professionals dedicated to serving you better.",
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      {/* <h2 className="text-3xl font-bold text-center mt-1 mb-8 text-white">Why Choose Us ?</h2> */}
      <h2 className="text-3xl font-bold text-center mt-0 mb-4 text-[#E53935]">
        Why Choose Us ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#003366] p-6 mt-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white text-[#E53935] flex items-center justify-center rounded-full mb-4 text-2xl group-hover:bg-[#E53935] group-hover:text-white transition-colors duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#E53935] transition-colors duration-300">
              {benefit.title}
            </h3>
            <p className="text-sm text-white">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
