import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    text: " loan process ka experience ekdum zabardast tha! Mera business loan 1 din mein approve ho gaya. Customer care wale bhi bahut helpful the, har step pe guide kiya. Interest rates bhi market se kam hain. Highly recommend karunga!",
    img: "https://i.pravatar.cc/150?img=1&u=a042581f4e29026704d",
    name: "Amit Sharma",
  },
  {
    id: 2,
    text: "Maine pehle kisi aur company se loan liya tha, lekin yahan ka process bahut simple hai. Documents upload karne ke baad koi tension nahi, sab kuch online ho jata hai. EMI calculation bhi clear hai, koi hidden charges nahi hain. Best hai!",
    img: "https://i.pravatar.cc/150?img=5&u=a042581f4e29026704e",
    name: "Priya Singh",
  },
  {
    id: 3,
    text: "Mera small business hai, bank se loan nahi mil raha tha. Yahan se 5 lakh ka loan mil gaya, process bhi simple tha. Bank statement upload kiya, verification hui, aur paise account mein aa gaye. Customer support bhi kafi helpful hai, koi problem ho toh solve kar dete hain.",
    img: "https://i.pravatar.cc/150?img=8&u=a042581f4e29026704f",
    name: "Rajesh Verma",
  },
  {
    id: 4,
    text: "App ka interface bahut user-friendly hai. Loan apply karne se lekar EMI payment tak, sab kuch ek hi app mein hai. Processing time bhi bahut kam hai, 1 ghanta me loan mil gya, experience ekdum behtar raha.",
    img: "https://i.pravatar.cc/150?img=9&u=a042581f4e29026704g",
    name: "Anisha",
  },
  {
    id: 5,
    text: "Maine 3 baar loan liya hai inse, har baar experience better hota gaya hai. Interest rates competitive hain, aur early repayment ka option bhi hai. Customer care wale bahut polite hain, har query ka proper solution dete hain. Trustworthy company hai!",
    img: "https://i.pravatar.cc/150?img=12&u=a042581f4e29026704h",
    name: "Suresh Kumar",
  },
  {
    id: 6,
    text: "New business start karne ke liye loan chahiye tha. Bank wale bahut documents maang rahe the, lekin yahan sirf basic documents se kaam ho gaya. Loan amount bhi business ke hisaab se perfect tha. Processing fee bhi nominal hai, koi extra charges nahi hain.",
    img: "https://i.pravatar.cc/150?img=15&u=a042581f4e29026704i",
    name: "Neha Patel",
  },
  {
    id: 7,
    text: "Working capital ke liye instant loan chahiye tha. Morning apply kiya, evening tak approval mil gaya. Same day paise account mein aa gaye. Interest rates bhi market se kam hain.  Best platform hai business loans ke liye!",
    img: "https://i.pravatar.cc/150?img=18&u=a042581f4e29026704j",
    name: "Vikram Mehta",
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
        {/* Heading + Avatars */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            Happy <span className="text-[#E53935]"></span> Customers 😊
          </h2>
          {/* <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="user1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://i.pravatar.cc/150?img=44"
              alt="user2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://i.pravatar.cc/150?img=36"
              alt="user3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E53935] text-white text-sm font-bold border-2 border-white shadow-md">
              1K+
            </span>
          </div> */}
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
