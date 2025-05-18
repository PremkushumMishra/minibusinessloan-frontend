import React from "react";

// Inline SVGs for pixel-perfect match (replace with your own SVGs if needed)
const icons = [
  // Quick Loan Approval (green)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M4 12l6 6L20 6"
      stroke="#2560A8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // 100% Secure Process (blue shield)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
      stroke="#2560A8"
      strokeWidth="2.5"
    />
  </svg>,
  // Transparent Process (blue doc)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="6"
      y="3"
      width="12"
      height="18"
      rx="2"
      stroke="#2560A8"
      strokeWidth="2.5"
    />
    <path
      d="M9 7h6M9 11h6M9 15h3"
      stroke="#2560A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>,
  // Competitive Interest Rates (blue %)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="8"
      stroke="#2560A8"
      strokeWidth="2.5"
    />
    <path
      d="M9 15l6-6"
      stroke="#2560A8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="9" r="1.5" fill="#2560A8" />
    <circle cx="15" cy="15" r="1.5" fill="#2560A8" />
  </svg>,
  // Digital-First Experience (replace with moneypic.png)
  <img
    src="/moneypic.png"
    alt="Money"
    style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover" }}
  />,
  // Dedicated Support (blue headset)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#2560A8" strokeWidth="2.5" />
    <path
      d="M8 15v2a2 2 0 002 2h4a2 2 0 002-2v-2"
      stroke="#2560A8"
      strokeWidth="2.5"
    />
    <path d="M8 15a4 4 0 018 0" stroke="#2560A8" strokeWidth="2.5" />
  </svg>,
];

// Angles for 6 icons (evenly spaced around the circle)
const iconAngles = [270, 330, 30, 90, 150, 210];

// Angles for 5 icons (evenly spaced around the inner circle)
const innerIconAngles = [270, 342, 54, 126, 198];

// Add 3 more features (dummy for now)
const features = [
  ...[
    {
      icon: icons[0],
      title: "Quick Loan Approval",
      text: "Get your loan approved within 30 mins with minimal documentation and hassle-free process.",
      iconBg: "bg-[#E6F4EA]",
      color: "text-[#2560A8]",
      side: "left",
    },
    {
      icon: icons[1],
      title: "100% Secure Process",
      text: "Your data is protected with bank-grade security and end-to-end encryption for complete peace of mind.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "left",
    },
    {
      icon: icons[2],
      title: "Transparent Process",
      text: "No hidden charges or surprises. Clear terms and conditions with complete transparency in all dealings.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "left",
    },
    {
      icon: icons[3],
      title: "Competitive Interest Rates",
      text: "Enjoy the lowest interest rates in the market with flexible repayment options tailored to your needs.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "right",
    },
    {
      icon: icons[4],
      title: "Digital-First Experience",
      text: "Complete your entire loan journey online with our user-friendly mobile and web platform.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "right",
    },
    {
      icon: icons[5],
      title: "Dedicated Support",
      text: "Get personalized assistance from our expert loan advisors available 24/7 to help you.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "right",
    },
  ],
  // 3 extra dummy features
];

const WhyChoose = () => {
  const OUTER = 340;
  const MIDDLE = OUTER * 0.8;
  const INNER = MIDDLE * 0.8;
  const CENTER = OUTER / 2;

  const headingStyle = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '30px',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#2D2D2D'
  };

  const subheadingStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#0D4059'
  };

  const featureTitleStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '140%',
    letterSpacing: '0%',
    color: '#0D4059'
  };

  const featureTextStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
    letterSpacing: '0%',
    color: '#0D4059'
  };

  return (
    <div className="bg-[#F5F5F5] py-6 md:py-12 text-[#0D4183] px-3 md:px-8 overflow-hidden">
      <h2
        className="text-center mb-2 md:mb-4"
        style={headingStyle}
      >
        Why Choose Us?
      </h2>
      <p
        style={subheadingStyle}
        className="mb-4 md:mb-10 px-2"
      >
        Smart financing solutions for every business.
        <br className="hidden md:block" />
        Transparent, reliable, and built for your success.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 relative max-w-6xl mx-auto">
        {/* Left Features (2) */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 items-end justify-center mt-4 lg:mt-15 mr-0 lg:mr-13 w-full lg:w-auto px-2">
          {features.slice(0, 2).map((f, i) => (
            <div key={i} className="flex items-start gap-1 max-w-xs w-full">
              <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2">
                <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">{f.icon}</span>
              </div>
              <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
                <div className="flex items-center gap-1">
                  <h3
                    style={featureTitleStyle}
                    className={`mb-0 ${f.color}`}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  style={featureTextStyle}
                  className="mt-0.5 md:mt-1"
                >
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Center Circles with Images and MBL */}
        <div
          className="flex flex-col items-center justify-center relative mx-1 md:mx-5 my-4 md:my-8"
          style={{ 
            minWidth: 'min(300px, 85vw)', 
            minHeight: 'min(300px, 85vw)', 
            width: 'min(300px, 85vw)', 
            height: 'min(300px, 85vw)' 
          }}
        >
          {/* Outermost Small Circle Image */}
          <img
            src="/circleiconsmall.png"
            alt="Full Circle"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full"
            style={{
              width: '100%',
              height: '100%',
              objectFit: "cover",
              boxShadow: "0 0 0 6px #E6F0F7",
            }}
          />

          {/* Middle Full Circle Image */}
          <img
            src="/circleiconfull.png"
            alt="Small Circle"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full"
            style={{ 
              width: '67.5%',
              height: '67.5%',
              objectFit: "cover" 
            }}
          />
          {/* MBL Text Centered with White BG */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-30"
            style={{
              width: '37.5%',
              height: '37.5%',
              background: "#fff",
              borderRadius: "50%",
            }}
          >
            <span className="text-base md:text-2xl lg:text-3xl font-bold text-[#17407C] font-poppins">
              MBL
            </span>
          </div>
          {/* Feature Icons Around (mathematically placed) */}
          {iconAngles.map((deg, i) => {
            const r = 50;
            const angle = (deg * Math.PI) / 180;
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            const f = features[i];
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  background: "#fff",
                  borderRadius: "50%",
                  width: '10%',
                  height: '10%',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 50,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  border: `2px solid ${
                    f.color === "text-[#3CB371]" ? "#E6F4EA" : "#E6F0F7"
                  }`,
                }}
              >
                {f.icon}
              </span>
            );
          })}
          {/* Inner circle icons */}
          {innerIconAngles.map((deg, i) => {
            const r = 33.75;
            const angle = (deg * Math.PI) / 180;
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            const f = features[i];
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  background: "#fff",
                  borderRadius: "50%",
                  width: '8%',
                  height: '8%',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 35,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  border: `2px solid ${
                    f.color === "text-[#3CB371]" ? "#E6F4EA" : "#E6F0F7"
                  }`,
                }}
              >
                {f.icon}
              </span>
            );
          })}
        </div>
        {/* Right Features (2) */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 mt-4 lg:mt-15 items-start justify-center ml-0 lg:ml-13 w-full lg:w-auto px-2">
          {features.slice(3, 5).map((f, i) => (
            <div key={i} className="flex items-start gap-1 max-w-xs w-full">
              <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2">
                <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">{f.icon}</span>
              </div>
              <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
                <div className="flex items-center gap-1">
                  <h3
                    style={featureTitleStyle}
                    className={`mb-0 ${f.color}`}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  style={featureTextStyle}
                  className="mt-0.5 md:mt-1"
                >
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Features (2) */}
      <div className="flex flex-col md:flex-row justify-center mt-4 md:mt-12 px-2 gap-0">
        {features.slice(2, 4).map((f, i) => (
          <div key={i} className="flex items-start gap-1 max-w-xs w-full mx-auto">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2">
              <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">{f.icon}</span>
            </div>
            <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
              <div className="flex items-center gap-1">
                <h3
                  style={featureTitleStyle}
                  className={`mb-0 ${f.color}`}
                >
                  {f.title}
                </h3>
              </div>
              <p
                style={featureTextStyle}
                className="mt-0.5 md:mt-1"
              >
                {f.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
