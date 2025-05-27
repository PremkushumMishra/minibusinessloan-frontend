import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import newheropic from "../assets/newheropic.jpg";
import rupeeicon from "../assets/rupeeicon.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function TalkingLoan() {
  return (
    <div className="max-w-full mx-auto px-2 md:px-8 rounded-bl-3xl py-4 bg-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start bg-gray-200 relative rounded-t-3xl md:rounded-t-3xl rounded-bl-3xl rounded-br-none min-h-[350px] md:min-h-[600px] overflow-hidden">
        {/* Background Image with subtle zoom-out */}
        <motion.div
          className="hidden md:block absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={newheropic}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-0"></div>
        </motion.div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <img
            src={newheropic}
            alt="Hero"
            className="w-full h-48 object-cover object-center rounded-t-3xl"
          />
        </div>

        {/* Main Animated Card (This will appear to emerge from the left) */}
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, x: -150, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.28,
            delay: 0.3,
          }}
          className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/90 backdrop-blur-md rounded-t-2xl rounded-bl-2xl rounded-br-none shadow-xl p-4 sm:p-6 md:p-8 mx-auto md:mx-0 md:ml-16 my-4 md:my-8 flex flex-col items-center justify-center"
        >
          {/* Floating Rupee Icon */}
          <motion.img
            src={rupeeicon}
            alt="Rupee"
            className="w-14 h-14 md:w-16 md:h-16 mb-4"
            initial={{ y: 80, scale: 0.4, opacity: 0 }}
            animate={{
              y: [80, -10, 0],
              scale: [0.4, 1.1, 1],
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: "easeOut",
            }}
          />

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-poppins text-[30px] leading-[140%] text-center text-[#2D2D2D] mb-2"
          >
            Grow your Business
            <br />
            Get Loan in just 30 Minutes
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="font-poppins font-normal mb-6 text-[20px] leading-[140%] text-center text-[#0D4059]"
          >
            From ₹5 Thousand To ₹5 Lacs Instantly in your Bank Account
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="w-full max-w-xs">
            <Link to="/mobile-verification">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 24px #0D4059aa",
                  backgroundColor: "#1e3a8a",
                }}
                whileTap={{ scale: 0.96 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(13,64,89,0)",
                    "0 4px 20px rgba(13,64,89,0.4)",
                    "0 0 0 rgba(13,64,89,0)",
                  ],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="bg-blue-800 text-white px-6 py-3 font-semibold text-sm sm:text-base rounded-t-xl rounded-bl-xl rounded-br-none w-full transition-all duration-300"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TalkingLoan;
