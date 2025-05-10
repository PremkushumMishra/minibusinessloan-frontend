import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    text: "Amazing customer service! I had an issue with my order, and they resolved it within hours. Highly impressed with their efficiency.",
    img: "https://i.pravatar.cc/150?img=1&u=a042581f4e29026704d",
    name: "Amit Sharma",
  },
  {
    id: 2,
    text: "I was hesitant at first, but this turned out to be a great experience. The team is super responsive, and the product quality is outstanding!",
    img: "https://i.pravatar.cc/150?img=5&u=a042581f4e29026704e",
    name: "Priya Singh",
  },
  {
    id: 3,
    text: "A seamless and hassle-free experience. From placing my order to receiving it on time, everything was perfect. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=8&u=a042581f4e29026704f",
    name: "Rajesh Verma",
  },
  {
    id: 4,
    text: "The attention to detail is remarkable! They truly care about their customers and go the extra mile to ensure satisfaction.",
    img: "https://i.pravatar.cc/150?img=9&u=a042581f4e29026704g",
    name: "Ananya Iyer",
  },
  {
    id: 5,
    text: "Exceptional quality! I've tried many services before, but this one stands out. The support team is friendly and very helpful.",
    img: "https://i.pravatar.cc/150?img=12&u=a042581f4e29026704h",
    name: "Suresh Kumar",
  },
  {
    id: 6,
    text: "Affordable prices and top-notch service. I was pleasantly surprised by the level of professionalism and quick response time.",
    img: "https://i.pravatar.cc/150?img=15&u=a042581f4e29026704i",
    name: "Neha Patel",
  },
  {
    id: 7,
    text: "The entire experience from start to finish was outstanding. I will definitely use their service again!",
    img: "https://i.pravatar.cc/150?img=18&u=a042581f4e29026704j",
    name: "Vikram Mehta",
  },
  {
    id: 8,
    text: "Great platform! I've recommended it to my friends and family. The service quality is superb!",
    img: "https://i.pravatar.cc/150?img=21&u=a042581f4e29026704k",
    name: "Sonia Reddy",
  },
  {
    id: 9,
    text: "Excellent customer support! They are always available to help and provide quick solutions. Loved the experience!",
    img: "https://i.pravatar.cc/150?img=24&u=a042581f4e29026704l",
    name: "Arjun Das",
  },
  {
    id: 10,
    text: "Perfect! From the design to the usability, everything is well thought out. Great job by the team!",
    img: "https://i.pravatar.cc/150?img=27&u=a042581f4e29026704m",
    name: "Pooja Malhotra",
  },
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
        {/* Heading + Avatars */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            Happy <span className="text-[#E53935]">😊</span> Customers
          </h2>
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/150?img=3&u=a042581f4e29026704n"
              alt="user1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://i.pravatar.cc/150?img=6&u=a042581f4e29026704o"
              alt="user2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://i.pravatar.cc/150?img=9&u=a042581f4e29026704p"
              alt="user3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E53935] text-white text-sm font-bold border-2 border-white shadow-md">
              1K+
            </span>
          </div>
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
                className="bg-white p-5 rounded-xl shadow-lg"
              >
                {/* Quote Circle - Left Align */}
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#003366]">
                    <span className="text-2xl text-white">❝</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[#003366] text-lg mt-2">{review.text}</p>

                {/* Thin Border */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt="reviewer"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  />
                  <p className="text-md font-semibold text-[#003366]">
                    {review.name}
                  </p>
                </div>
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
  );
};

export default PublicReview;
