import React, { useState } from 'react';

const AppDownload = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mb-10 max-w-6xl mx-auto px-6 py-4 sm:py-4 md:py-1 flex flex-col md:flex-row items-center justify-between bg-[#0D4183] rounded-t-2xl rounded-bl-2xl my-1 overflow-visible">
      {/* Left: Text & Buttons */}
      <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0 md:mr-8 z-10">
        <h2 className="text-2xl sm:text-2xl mt-4 md:text-4xl font-poppins text-white mb-4 text-left">
          Download Our App
        </h2>
        <p className="text-white text-base sm:text-lg mb-8 text-left max-w-xl">
          Get instant access to all features, apply for loans, track your application, and manage your account on the go. Download the Mini Business Loan app now!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-7 w-full sm:w-auto justify-start items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center"
        
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 sm:h-14 w-auto"
            />
          </a>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto flex justify-center focus:outline-none"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 sm:h-14 w-auto"
            />
          </button>
        </div>
      </div>

      {/* Right: Mobile Image (Desktop) */}
      <div className="hidden md:block absolute right-4 bottom-0 translate-x-2 z-0 max-w-[35%]">
        <img
          src="/appdownloadpic.png"
          alt="App Download"
          className="w-full h-auto object-contain"
        />
      </div>
      {/* Mobile: Image below text/buttons */}
      <div className="block md:hidden w-full flex justify-center items-center mt-4">
        <img
          src="/appdownload.png"
          alt="App Download"
          className="max-w-[180px] h-auto object-contain"
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center max-w-xs w-full">
            <img
              src="/apploglogo.png"
              alt="Apple Logo"
              className="h-16 w-16 mb-2 object-contain"
            />
            <h3 className="text-xl font-bold mb-2 text-[#003366] text-center">iOS App Coming Soon!</h3>
            <p className="text-gray-700 text-center mb-4">We're working hard to bring our app to the App Store. Stay tuned!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-6 py-2 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#E53935] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDownload;
