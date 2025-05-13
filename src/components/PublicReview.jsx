import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    text: "बहुत आसान और तेज़ सेवा! धन्यवाद।",
    img: "https://i.pravatar.cc/150?img=1&u=a042581f4e29026704d",
  },
  {
    id: 2,
    text: "मुझे तुरंत लोन मिल गया, बहुत अच्छा अनुभव।",
    img: "https://i.pravatar.cc/150?img=5&u=a042581f4e29026704e",
  },
  {
    id: 3,
    text: "सपोर्ट टीम बहुत मददगार है।",
    img: "https://i.pravatar.cc/150?img=8&u=a042581f4e29026704f",
  },
  {
    id: 4,
    text: "प्रोसेस बहुत सिंपल है, सब कुछ ऑनलाइन।",
    img: "https://i.pravatar.cc/150?img=9&u=a042581f4e29026704g",
  },
  {
    id: 5,
    text: "कम ब्याज दर और जल्दी अप्रूवल।",
    img: "https://i.pravatar.cc/150?img=12&u=a042581f4e29026704h",
  },
  {
    id: 6,
    text: "बहुत भरोसेमंद प्लेटफार्म।",
    img: "https://i.pravatar.cc/150?img=15&u=a042581f4e29026704i",
  },
  {
    id: 7,
    text: "मेरे बिज़नेस के लिए बहुत फायदेमंद।",
    img: "https://i.pravatar.cc/150?img=18&u=a042581f4e29026704j",
  },

  // {
  //   id: 8,
  //   text: "Mera first time business loan experience tha, lekin process itna simple tha ki koi tension nahi hui. Customer care wale har step pe guide karte rahe. Documentation bhi minimal hai, sirf basic documents chahiye the. Interest rates bhi reasonable hain.",
  //   img: "https://i.pravatar.cc/150?img=21&u=a042581f4e29026704k",
  //   name: "Sonia Reddy",
  // },
  // {
  //   id: 9,
  //   text: "Business expansion ke liye loan chahiye tha. Bank se reject ho gaya tha, lekin yahan se easily mil gaya. Process fully digital hai, koi branch visit nahi karna pada. EMI payment ka reminder bhi aata hai, late payment ka chance hi nahi hai. Great service!",
  //   img: "https://i.pravatar.cc/150?img=24&u=a042581f4e29026704l",
  //   name: "Arjun Das",
  // },
  // {
  //   id: 10,
  //   text: "Maine multiple banks se try kiya tha loan ke liye, lekin yahan ka experience sabse best raha. No hidden charges, transparent process, aur quick disbursement. Customer support team bahut helpful hai, har query ka instant solution milta hai. Must try!",
  //   img: "https://i.pravatar.cc/150?img=27&u=a042581f4e29026704m",
  //   name: "Pooja Malhotra",
  // },
];

const PublicReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState("");

  const cardsPerPage = 3;

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
    <div className="bg-[#003366] py-16 min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            Happy Customers 😊
          </h2>
        </div>

        {/* Review Cards with Animation */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-300 ${animate}`}
        >
          {reviews
            .slice(startIndex, startIndex + cardsPerPage)
            .map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center min-h-[220px]"
              >
                {/* User Image Centered */}
                <img
                  src={review.img}
                  alt="reviewer"
                  className="w-16 h-16 rounded-full border-2 border-[#003366] shadow mb-4 object-cover"
                />
                {/* Review Text */}
                <p className="text-[#003366] text-lg font-medium text-center">{review.text}</p>
              </div>
            ))}
        </div>

        {/* Next & Prev Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className={`bg-white text-[#003366] px-6 py-2 rounded-lg shadow-md transition ${
              startIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#E53935] hover:text-white hover:scale-105"
            }`}
            onClick={prevPage}
            disabled={startIndex === 0}
          >
            Prev
          </button>
          <button
            className={`bg-[#E53935] text-white px-6 py-2 rounded-lg shadow-md transition ${
              startIndex + cardsPerPage >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#003366] hover:scale-105"
            }`}
            onClick={nextPage}
            disabled={startIndex + cardsPerPage >= reviews.length}
          >
            Next
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
