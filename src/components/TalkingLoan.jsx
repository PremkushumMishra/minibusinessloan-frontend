import React from "react";
import homepic from "../assets/homepicnew.jpg";

const TalkingLoan = () => {
  return (
    <div className="relative w-full mt-26">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src={homepic}
          alt="Home"
          className="w-full h-[500px] object-cover object-[20%]"
        />
      </div>
    </div>
  );
};

export default TalkingLoan;
