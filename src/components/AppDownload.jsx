import React, { useState } from 'react'

const AppDownload = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full px-4 py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center bg-[#003366]  shadow-xl my-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Download Our App
      </h2>
      <p className="text-white text-base sm:text-lg mb-8 text-center max-w-xl">
        Get instant access to all features, apply for loans, track your application, and manage your account on the go. Download the Mini Business Loan app now!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
        <a
          href="https://play.google.com/store" // Replace with your actual app link
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
  )
}

export default AppDownload
