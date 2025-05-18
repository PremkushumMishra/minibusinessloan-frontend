import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
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

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="group slick-arrow slick-next relative overflow-hidden !flex !items-center !justify-center !rounded-full !w-14 !h-14 sm:!w-20 sm:!h-20 !absolute !-right-4 sm:!-right-20 mt-6 sm:mt-10 top-[70%] -translate-y-1/2 z-10 border border-gray-200"
      onClick={onClick}
      aria-label="Next"
    >
      <span className="absolute inset-0 rounded-full bg-[#045382]/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="relative z-10">
        <path d="M9 6l6 6-6 6" stroke="#045382" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="group slick-arrow slick-prev relative overflow-hidden !flex !items-center !justify-center !rounded-full !w-14 !h-14 sm:!w-20 sm:!h-20 !absolute !-left-4 sm:!-left-24 mt-6 sm:mt-10 top-[70%] -translate-y-1/2 z-10 border border-gray-200"
      onClick={onClick}
      aria-label="Previous"
    >
      <span className="absolute inset-0 rounded-full bg-[#045382]/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="relative z-10">
        <path d="M15 6l-6 6 6 6" stroke="#045382" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const PublicReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f4f4f4] py-2 min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 w-full">
        <h2
          className="mx-auto text-center mb-8 sm:mb-12"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "130%",
            color: "#0D4183",
            maxWidth: 320,
          }}
        >
          Their Words speak for us
        </h2>

        {/* Review Cards Slider */}
        <div className="flex justify-center items-center gap-4 min-h-[180px]">
          <div className="w-full max-w-[95vw] sm:max-w-[600px]">
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="bg-[#045382] rounded-t-2xl rounded-bl-2xl p-1">
                  <div
                    className={
                      "bg-white rounded-t-4xl rounded-bl-4xl shadow-md px-4 sm:px-8 py-6 sm:py-8 flex items-start gap-4 sm:gap-6 w-full min-h-[120px] sm:min-h-[140px]"
                    }
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(24,71,133,0.10)",
                    }}
                  >
                    <div className="flex flex-col items-center min-w-[48px] sm:min-w-[60px]">
                      <img
                        src={review.img}
                        alt="reviewer"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-2 border-white shadow"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p
                        className="text-sm sm:text-base text-[#184785] mb-2 sm:mb-4"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "150%" }}
                      >
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicReview;
