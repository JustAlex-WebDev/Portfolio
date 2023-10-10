import React from "react";
import { useCursorContext } from "../../context/CursorContext";

const AboutSection = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full relative max-w-[1140px] m-auto px-4 py-[28rem] sm:py-72 flex flex-col justify-center items-center gap-16">
      <div className="text-center text-xl font-medium">
        I have passion for creating user
        <br /> experiences that are seamless,
        <br /> meaningful and impactful.
      </div>
      <div
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className="bg-black hover:bg-white text-white hover:text-black text-sm font-medium w-24 h-24 rounded-full flex justify-center items-center hover:scale-125 hover:border-black hover:border-2 duration-300 ease-in-out"
      >
        About me
      </div>
      <div className="absolute top-20 left-4 sm500:left-20 sm600:left-28 sm:left-4 lg850:left-20 w-28 sm368:w-36 sm:w-28 md:w-36 h-40 sm368:h-48 sm:h-40 md:h-48 rounded-2xl">
        <img
          src="wonderMockup2.jpeg"
          alt=""
          className="w-36 h-48 object-cover object-top rounded-2xl"
        />
      </div>
      <div className="absolute top-40 right-4 sm500:right-20 sm600:right-28 sm:right-4 lg850:right-20 w-28 sm368:w-36 sm:w-28 md:w-36 h-52 sm368:h-60 sm:h-52 md:h-60 rounded-2xl">
        <img
          src="wonderMockup2.jpeg"
          alt=""
          className="w-36 h-60 object-cover object-center rounded-2xl"
        />
      </div>
      <div className="absolute bottom-40 left-4 sm500:left-20 sm600:left-28 sm:left-24 lg850:left-48 w-28 sm368:w-36 sm:w-28 md:w-36 h-52 sm368:h-60 sm:h-52 md:h-60 rounded-2xl">
        <img
          src="artconnectionMockup3.jpeg"
          alt=""
          className="w-36 h-60 object-cover object-top rounded-2xl"
        />
      </div>
      <div className="absolute bottom-20 right-4 sm500:right-20 sm600:right-28 sm:right-24 lg850:right-48 w-28 sm368:w-36 sm:w-28 md:w-36 h-40 sm368:h-48 sm:h-40 md:h-48 rounded-2xl">
        <img
          src="artconnectionMockup3.jpeg"
          alt=""
          className="w-36 h-48 object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutSection;
