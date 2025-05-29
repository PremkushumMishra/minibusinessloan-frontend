import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppDownload = () => {
  const [showModal, setShowModal] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="relative mb-10 max-w-6xl mx-auto px-6 py-4 sm:py-4 md:py-1 flex flex-col md:flex-row items-center justify-between bg-[#0D4183] rounded-t-2xl rounded-bl-2xl my-1 overflow-visible"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left: Text & Buttons */}
      <motion.div 
        className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:mr-8 z-10"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-2xl sm:text-2xl mt-4 md:text-4xl font-poppins text-white mb-4 text-left"
          variants={itemVariants}
        >
          Download Our App
        </motion.h2>
        <motion.p 
          className="text-white text-base sm:text-lg mb-8 text-left max-w-xl"
          variants={itemVariants}
        >
          Get instant access to all features, apply for loans, track your application, and manage your account on the go. Download the Mini Business Loan app now!
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-7 w-full sm:w-auto justify-start items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 sm:h-14 w-auto"
            />
          </motion.a>
          <motion.button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto flex justify-center focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 sm:h-14 w-auto"
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right: Mobile Image (Desktop) */}
      <motion.div 
        className="hidden md:block absolute right-4 bottom-0 translate-x-2 z-0 max-w-[35%]"
        variants={imageVariants}
        whileHover="hover"
      >
        <img
<<<<<<< HEAD
          src="/appdownloadlogo.png"
=======
          src="/calulator.png"
>>>>>>> 49ef24b7ef235b78ad6c6f5d37576d8d2ec223b5
          alt="App Download"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Mobile: Image below text/buttons */}
      <motion.div 
        className="block md:hidden w-full flex justify-center items-center mt-4"
        variants={imageVariants}
        whileHover="hover"
      >
        <img
          src="/appdownloadpic.png"
          alt="App Download"
          className="max-w-[180px] h-auto object-contain"
        />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center max-w-xs w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src="/apploglogo.png"
                alt="Apple Logo"
                className="h-16 w-16 mb-2 object-contain"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              />
              <motion.h3 
                className="text-xl font-bold mb-2 text-[#003366] text-center"
                variants={itemVariants}
              >
                iOS App Coming Soon!
              </motion.h3>
              <motion.p 
                className="text-gray-700 text-center mb-4"
                variants={itemVariants}
              >
                {/* We're working hard to bring our app to the App Store. Stay tuned! */}
              </motion.p>
              <motion.button
                onClick={() => setShowModal(false)}
                className="mt-2 px-6 py-2 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#E53935] transition"
                whileHover={{ scale: 1.05, backgroundColor: "#E53935" }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppDownload;
