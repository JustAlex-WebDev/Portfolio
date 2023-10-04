import React from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full relative max-w-[1140px] m-auto px-4 py-24">
      <div className="w-full h-96 absolute top-28 left-0 flex flex-col px-20 justify-center items-center">
        <div className="w-full flex justify-center items-center animate-iconsAnimation1">
          <Link
            to="/"
            title="Gmail"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-12 h-12 bg-red-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out"
          >
            <SiGmail size={22} className="text-red-500" />
          </Link>
        </div>
        <div className="w-full flex justify-end items-center mt-32 mb-20 animate-iconsAnimation2">
          <Link
            to="/"
            title="GitHub"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out"
          >
            <FaGithub size={22} className="text-gray-500" />
          </Link>
        </div>
        <div className="w-full flex justify-start items-center animate-iconsAnimation3">
          <Link
            to="/"
            title="LinkedIn"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-12 h-12 bg-blue-200 flex justify-center items-center rounded-full hover:scale-125 duration-300 ease-in-out"
          >
            <FaLinkedin size={22} className="text-blue-500" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-3/4 relative z-50 m-auto mt-24 font-medium flex flex-col gap-6 justify-center items-left">
        <div className="text-sm sm575:text-base">Alexandar Valov</div>
        <div className="text-5xl sm575:text-6xl xmd:text-7xl">Front-End</div>
        <div className="text-5xl sm575:text-6xl xmd:text-7xl w-[85%] sm465:text-right sm575:text-center md:text-end">
          Web Developer
        </div>
      </div>
    </div>
  );
};

export default Home;
