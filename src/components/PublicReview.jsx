import React, { useState, useEffect } from "react";

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const review = reviews[current];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-white py-12 px-4 md:px-0 transition-all duration-500">
      {/* Left: Image with overlay and border */}
      <div className="relative flex-shrink-0 mb-8 md:mb-0 md:mr-[-40px] w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex items-center justify-center">
        {/* Decorative border (SVG) */}
        <svg className="absolute left-0 top-0 w-full h-full z-0" viewBox="0 0 320 320" fill="none">
          <ellipse cx="160" cy="160" rx="155" ry="155" stroke="#00BCD4" strokeWidth="6" />
          <circle cx="30" cy="30" r="6" fill="#00BCD4" />
          <circle cx="290" cy="60" r="4" fill="#FFD600" />
          <circle cx="60" cy="290" r="4" fill="#00BCD4" />
        </svg>
        {/* User Image */}
        <img
          src={review.img}
          alt={review.name}
          className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full object-cover z-10 border-8 border-white shadow-lg"
        />
        {/* Play Button Overlay */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-3 shadow-lg flex items-center justify-center">
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="18" fill="#00BCD4" />
              <polygon points="14,11 26,18 14,25" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right: Text Box */}
      <div className="bg-[#14b8c4] rounded-2xl p-6 md:p-8 w-full max-w-xl shadow-lg z-10 flex flex-col justify-center">
        <div className="text-2xl md:text-4xl font-bold text-white mb-2">{review.name}</div>
        <div className="text-white text-base md:text-lg font-medium">{review.text}</div>
      </div>
    </div>
  );
};

export default PublicReview;
