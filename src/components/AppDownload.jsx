import React from 'react'

const AppDownload = () => {
  return (
    <div className="w-full px-4 py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center bg-[#003366] rounded-2xl shadow-xl my-8">
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
        <a
          href="https://www.apple.com/in/app-store/" // Replace with your actual app link
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12 sm:h-14 w-auto"
          />
        </a>
      </div>
    </div>
  )
}

export default AppDownload
