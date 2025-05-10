import React from "react";

const Features = () => {
  const features = [
    {
      icon: "📱",
      title: "Easy Application",
      text: "Apply for loans in minutes with our simple online process",
    },
    {
      icon: "📊",
      title: "Smart Analysis",
      text: "Secure funding instantly for your business expansion",
    },
    {
      icon: "💳",
      title: "Quick Disbursal",
      text: "Receive funds directly in your bank account within 30 mins.",
    },
  ];

  return (
    <div className="bg-[#003366] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Simple Loan Process
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Experience the fastest and most secure way to get your loan approved
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#003366]/10"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center mb-3 text-xl transform group-hover:bg-[#E53935] transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2 group-hover:text-[#E53935] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
