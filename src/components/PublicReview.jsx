import React, { useState } from "react";
const reviews = [
  // {
  //   id: 1,
  //   text: "कुछ महीनों पहले अचानक खर्च बढ़ गया था। सोच नहीं रहा था कि इतनी जल्दी लोन मिल जाएगा। काम फिर से पटरी पर आ गया।",
  //   img: "https://i.pravatar.cc/150?img=1&u=a042581f4e29026704d",
  //   },
    {
      id: 2,
      text: "छोटा बिज़नेस शुरू करने के लिए पैसा चाहिए था। इस ऐप ने मेरी शुरुआत आसान कर दी।",
      img: "streetvendorfive.jpg",
    },
    {
      id: 3,
      text: "कोई hidden charges नहीं थे। सब कुछ साफ-साफ बताया गया।",
      img: "streetvendorsix.jpg",
    },
    {
      id: 4,
      text: "मैंने मोबाइल से ही पूरा प्रोसेस किया, agent की जरूरत नहीं पड़ी।",
      img: "streetvendorsthree.jpg",
    },
    {
      id: 5,
      text: "यहीं के स्टाफ ने पूरा समझाया और गाइड किया। सब कुछ आसान लगा और टाइम पर मदद भी मिल गई।",
      img: "streetvendorshop.jpg",
    },
  {
    id: 6,
    text: "कागज कम मांगे, टेंशन भी कम, और टाइम पर पैसा भी मिल गया।",
    img: "streetvendorsabji.jpg",
  },

];

const PublicReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  const cardsPerPage = 1;

  const nextPage = () => {
    if (startIndex + cardsPerPage < reviews.length) {
      setAnimate("slide-left");
      setTimeout(() => {
        setStartIndex(startIndex + cardsPerPage);
        setAnimate("");
      }, 300);
    }
  };

  const prevPage = () => {
    if (startIndex - cardsPerPage >= 0) {
      setAnimate("slide-right");
      setTimeout(() => {
        setStartIndex(startIndex - cardsPerPage);
        setAnimate("");
      }, 300);
    }
  };

  return (
    <div className="bg-[#003366] py-16 min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            Happy Customers 😊
          </h2>
        </div>

        {/* Review Card with Animation */}
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-300 ${animate}`}
        >
          {/* Image Left (large, rounded, shadow) */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={reviews[startIndex].img}
              alt="reviewer"
              className="w-56 h-64 md:w-64 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-[#00BCD4] bg-white"
            />
          </div>
          {/* Text Right (colored box, quote icon, right aligned) */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <div className="relative bg-[#0e5e7d] text-white rounded-2xl shadow-xl px-8 py-8 md:py-10 md:px-10 w-full max-w-xl text-left">
              <svg
                className="absolute -top-6 left-4 w-10 h-10 text-white/30"
                fill="none"
                viewBox="0 0 48 48"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 19c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zm0 0v6m16-6v6"
                />
              </svg>
              <p className="text-lg md:text-xl font-medium leading-relaxed relative">
                <span className="text-5xl align-top text-white/60 mr-1">“</span>
                {reviews[startIndex].text}
                <span className="text-5xl align-bottom text-white/60 ml-1">”</span>
              </p>
            </div>
          </div>
        </div>

        {/* Next & Prev Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            className={`bg-[#00BCD4] text-white px-6 py-2 rounded-lg shadow-md transition text-2xl ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#E53935] hover:text-white hover:scale-105"
            }`}
            onClick={prevPage}
            disabled={startIndex === 0}
          >
            &#60;
          </button>
          <button
            className={`bg-[#00BCD4] text-white px-6 py-2 rounded-lg shadow-md transition text-2xl ${
              startIndex + cardsPerPage >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#003366] hover:scale-105"
            }`}
            onClick={nextPage}
            disabled={startIndex + cardsPerPage >= reviews.length}
          >
            &#62;
          </button>
        </div>

        {/* Animation Styles */}
        <style>
          {`
            .slide-left {
              transform: translateX(-20px);
              opacity: 0;
            }
            .slide-right {
              transform: translateX(20px);
              opacity: 0;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default PublicReview;
