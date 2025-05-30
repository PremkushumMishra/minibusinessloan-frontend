import React from "react";
import { motion } from "framer-motion";

// Inline SVGs for pixel-perfect match (replace with your own SVGs if needed)
const icons = [
  // Quick Loan Approval (custom image)
  <img
    src="/quick-approval.png"
    alt="Quick Approval"
    style={{ 
      width: 32, 
      height: 32, 
      fontFamily: 'Poppins',
      borderRadius: "50%", 
      objectFit: "contain",
      padding: "2px"
    }}
  />,
  // 100% Secure Process (deep blue shield)
  <svg width="24" font-poppins height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
      stroke="#0D4183"
      strokeWidth="2.5"
    />
  </svg>,
  // Transparent Process (deep blue doc)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="6"
      y="3"
      width="12"
      height="18"
      rx="2"
      stroke="#0D4183"
      strokeWidth="2.5"
    />
    <path
      d="M9 7h6M9 11h6M9 15h3"
      stroke="#0D4183"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>,
  // Competitive Interest Rates (deep blue %)
  <svg width="24" font-poppins height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="8"
      stroke="#0D4183"
      strokeWidth="2.5"
    />
    <path
      d="M9 15l6-6"
      stroke="#0D4183"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="9" r="1.5" fill="#0D4183" />
    <circle cx="15" cy="15" r="1.5" fill="#0D4183" />
  </svg>,
  // Digital-First Experience (replace with moneypic.png)
  <img
    src="/rupeepic.png"
    alt="Money"
    style={{ 
      width: 32, 
      height: 32, 
      borderRadius: "50%", 
      objectFit: "contain",
      padding: "2px",
    }}
  />,
  // Dedicated Support (deep blue headset)
  <svg width="24" font-poppins height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#0D4183" strokeWidth="2.5" />
    <path
      d="M8 15v2a2 2 0 002 2h4a2 2 0 002-2v-2"
      stroke="#0D4183"
      strokeWidth="2.5"
    />
    <path d="M8 15a4 4 0 018 0" stroke="#0D4183" strokeWidth="2.5" />
  </svg>,
];

// White version of icons for desktop view
const whiteIcons = [
  // Quick Loan Approval 
  <img
    src="/quick-approval.png"
    alt="Quick Approval"
    style={{ 
      width: 32, 
      height: 32, 
      borderRadius: "50%", 
      objectFit: "contain",
      padding: "2px"
    }}
  />,
  // 100% Secure Process (white shield)
  <svg width="24" height="24" font-poppins fill="none" viewBox="0 0 24 24">
    <path
      d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
      stroke="#FFFFFF"
      strokeWidth="2.5"
    />
  </svg>,
  // Transparent Process (white doc)
  <svg width="24" font-poppins height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="6"
      y="3"
      width="12"
      height="18"
      rx="2"
      stroke="#FFFFFF"
      strokeWidth="2.5"
    />
    <path
      d="M9 7h6M9 11h6M9 15h3"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>,
  // Competitive Interest Rates (white %)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="8"
      stroke="#FFFFFF"
      strokeWidth="2.5"
    />
    <path
      d="M9 15l6-6"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="9" r="1.5" fill="#FFFFFF" />
    <circle cx="15" cy="15" r="1.5" fill="#FFFFFF" />
  </svg>,
  // Digital-First Experience
  <img
    src="/rupeepic.png"
    alt="Money"
    style={{ 
      width: 32, 
      height: 32, 
      borderRadius: "50%", 
      objectFit: "contain",
      padding: "2px",
    }}
  />,
  // Dedicated Support (white headset)
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2.5" />
    <path
      d="M8 15v2a2 2 0 002 2h4a2 2 0 002-2v-2"
      stroke="#FFFFFF"
      strokeWidth="2.5"
    />
    <path d="M8 15a4 4 0 018 0" stroke="#FFFFFF" strokeWidth="2.5" />
  </svg>,
];

// Add 3 more features (dummy for now)
const features = [
  ...[
    {
      icon: icons[0],
      whiteIcon: whiteIcons[0],
      title: "Quick Loan Approval",
      text: "Get your loan approved within 30 mins with minimal documentation and hassle-free process.",
      iconBg: "bg-[#E6F4EA]",
      color: "text-[#FFFFFF]",
      side: "left",
      fontFamily: 'Poppins',
      textAlign: 'justify',
    },
    {
      icon: icons[1],
      whiteIcon: whiteIcons[1],
      title: "100% Secure Process",
      text: "Your data is protected with bank-grade security and end-to-end encryption for complete peace of mind.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#FFFFFF]",
      side: "left",
    },
    {
      icon: icons[2],
      whiteIcon: whiteIcons[2],
      title: "Transparent Process",
      text: "No hidden charges or surprises. Clear terms and conditions with complete transparency in all dealings.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "left",
    },
    {
      icon: icons[3],
      whiteIcon: whiteIcons[3],
      title: "Competitive Interest Rates",
      text: "Enjoy the lowest interest rates in the market with flexible repayment options tailored to your needs.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "right",
    },
    {
      icon: icons[4],
      whiteIcon: whiteIcons[4],
      title: "Digital-First Experience",
      text: "Complete your entire loan journey online with our user-friendly mobile and web platform.",
      iconBg: "bg-[#E6F0F7]",
      color: "text-[#2560A8]",
      side: "right",
    },
    {
      icon: icons[5],
      whiteIcon: whiteIcons[5],
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
    color: '#fff',
  };

  const subheadingStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '140%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: '#fff',
  };

  const featureTitleStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '140%',
    letterSpacing: '0%',
    color: '#fff',
  };

  const featureTextStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
    letterSpacing: '0%',
    color: '#fff',
    textAlign: 'justify',
  };

  // Animation variants
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const slideBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0D4183] py-6 md:py-12 rounded-t-3xl rounded-bl-3xl text-[#FFFFFF] px-3 md:px-8 overflow-hidden">
      <motion.h2
        className="text-center font-poppins mb-2 md:mb-4 animate-grow"
        style={headingStyle}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Why Choose Us?
      </motion.h2>
      <motion.p
        style={subheadingStyle}
        className="mb-4 md:mb-10 font-poppins px-2 animate-slide-up"
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        Smart financing solutions for every business.
        Transparent, reliable, and built for your success.
      </motion.p>
      {/* Desktop/Laptop/Tablet layout */}
      <div className="hidden md:flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative max-w-6xl mx-auto">
        {/* Left Features (2) */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 items-end justify-center mt-4 lg:mt-15 mr-0 lg:mr-13 w-full lg:w-auto px-2">
          {features.slice(0, 2).map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-1 max-w-xs w-full animate-slide-from-left"
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            >
              <motion.div
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center desktop-icon">
                  {f.whiteIcon}
                </span>
              </motion.div>
              <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
                <div className="flex items-center gap-1">
                  <h3
                    style={featureTitleStyle}
                    className={`mb-0 ${f.color} feature-title-single-line`}
                  >
                    {f.title}
                  </h3>
                </div>
                <motion.p
                  style={featureTextStyle}
                  className="mt-0.5 md:mt-1 text-justify"
                  variants={fadeSlideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                >
                  {f.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Center: Replace circle with image */}
        <motion.div
          className="flex flex-col items-center justify-center relative mx-1 md:mx-5 my-4 md:my-8"
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src="/whycircle.png"
            alt="Why Choose Us Circle"
            className="max-w-full h-auto object-contain"
            style={{ width: 'min(400px, 95vw)' }}
          />
        </motion.div>
        {/* Right Features (2) */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8 mt-4 lg:mt-15 items-start justify-center ml-0 lg:ml-13 w-full lg:w-auto px-2">
          {features.slice(3, 5).map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-1 max-w-xs w-full animate-slide-from-right"
              variants={slideRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            >
              <motion.div
                className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2"
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center desktop-icon">
                  {f.whiteIcon}
                </span>
              </motion.div>
              <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
                <div className="flex items-center gap-1">
                  <h3
                    style={featureTitleStyle}
                    className={`mb-0 ${f.color} feature-title-single-line`}
                  >
                    {f.title}
                  </h3>
                </div>
                <motion.p
                  style={featureTextStyle}
                  className="mt-0.5 md:mt-1 text-justify"
                  variants={fadeSlideUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                >
                  {f.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bottom Features (2) */}
      <div className="hidden md:flex flex-col md:flex-row justify-center mt-4 md:mt-12 px-2 gap-0">
        {features.slice(2, 4).map((f, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-1 max-w-xs w-full mx-auto animate-slide-from-bottom"
            variants={slideBottom}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.7 + i * 0.2 }}
          >
            <motion.div
              className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 overflow-hidden -mt-1 md:-mt-2"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center desktop-icon">
                {f.whiteIcon}
              </span>
            </motion.div>
            <div className="flex flex-col justify-center min-h-[40px] md:min-h-[48px]">
              <div className="flex items-center gap-1">
                <h3
                  style={featureTitleStyle}
                  className={`mb-0 ${f.color} feature-title-single-line`}
                >
                  {f.title}
                </h3>
              </div>
              <motion.p
                style={featureTextStyle}
                className="mt-0.5 md:mt-1 text-justify"
                variants={fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              >
                {f.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Mobile layout: image on top, 6 cards below */}
      <div className="flex flex-col items-center md:hidden w-full mt-6">
        {/* Circle graphic replaced with image */}
        <motion.div
          className="flex flex-col items-center justify-center relative mx-auto mb-4"
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/whycircle.png"
            alt="Why Choose Us Circle"
            className="max-w-full h-auto object-contain"
            style={{ width: '220px', height: '220px' }}
          />
        </motion.div>
        {/* 6 cards, vertically stacked below the image */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white rounded-xl shadow-sm p-4 w-full animate-slide-from-bottom"
              variants={slideBottom}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center mb-2 bg-[#F5F5F5] rounded-full"
                whileHover={{ scale: 1.18, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  {f.icon}
                </span>
              </motion.div>
              <h3 className="text-base font-semibold text-[#0D4183] text-center mb-1" style={{ fontFamily: 'Poppins' }}>
                {f.title}
              </h3>
              <motion.p
                style={featureTextStyle}
                className="mt-0.5 md:mt-1 text-justify"
                variants={fadeSlideUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              >
                {f.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-right {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
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
        @keyframes slide-from-bottom {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
          transform-origin: center;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-slide-from-left {
          animation: slide-from-left 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-from-right {
          animation: slide-from-right 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-from-bottom {
          animation: slide-from-bottom 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes grow {
          0% {
            transform: scale(0.5);
            opacity:0;
            0;
          }
          100% {
            transform: scale(1);
            opacity: 1; 
          }
        }
        .animate-grow {
          animation: grow 0.8s ease-out forwards; 
        }
        /* On mobile, only display the SVG icons when inside the circles, not in the cards */
        @media (max-width: 768px) {
          .desktop-icon {
            display: none;
          }
          .mobile-icon {
            display: block; 
          }
        }
        /* On desktop, show the white icons */
        @media (min-width: 769px) {
          .desktop-icon {
            display: block;
          }
          .mobile-icon {
            display: none;
          }
        }
        .desktop-icon {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 768px) {
          .feature-title-single-line {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .feature-text-clamp {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChoose;