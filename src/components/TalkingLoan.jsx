import React from "react";
import homepic from "../assets/homepic.jpg";

const TalkingLoan = () => {
  return (
    <div className="relative w-full mt-26">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src={homepic}
          alt="Home"
          className="w-full h-[500px] object-cover object-[20%] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default TalkingLoan;
