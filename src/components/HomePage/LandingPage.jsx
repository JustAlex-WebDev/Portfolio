import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../../context/CursorContext";

const LandingPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full relative max-w-[1140px] m-auto px-4 py-24">
      <div className="w-full h-[30rem] sm465:h-96 absolute top-10 sm465:top-28 left-0 flex flex-col px-10 sm465:px-20 justify-center items-center">
        <div className="w-full flex justify-center items-center animate-iconsAnimation1">
          <Link
            to="/"
            title="Gmail"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-14 h-14 bg-red-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out"
          >
            <SiGmail size={22} className="text-red-500" />
          </Link>
        </div>
        <div className="w-full flex justify-end items-center mt-24 sm:mt-32 mb-12 sm465:mb-28 sm:mb-20 animate-iconsAnimation2">
          <Link
            to="https://github.com/JustAlex-WebDev"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out"
          >
            <FaGithub size={22} className="text-gray-500" />
          </Link>
        </div>
        <div className="w-full flex ml-20 sm465:ml-40 sm575:mt-20 md:mt-0 justify-center md:justify-start items-center animate-iconsAnimation3">
          <Link
            to="https://www.linkedin.com/in/alexandar-valov-667567242/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-14 h-14 bg-blue-200 flex justify-center items-center rounded-full hover:scale-125 duration-300 ease-in-out"
          >
            <FaLinkedin size={22} className="text-blue-500" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-3/4 relative m-auto mt-24 font-medium flex flex-col gap-6 justify-center items-left -z-10">
        <div className="text-sm sm575:text-base">Alexandar Valov</div>
        <div className="text-4xl sm465:text-5xl sm575:text-6xl xmd:text-7xl">
          Front-End
        </div>
        <div className="text-4xl sm465:text-5xl sm575:text-6xl xmd:text-7xl w-[85%]  md:text-end">
          Web Developer
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
