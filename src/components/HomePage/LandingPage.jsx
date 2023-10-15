import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../../context/CursorContext";

const LandingPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full relative max-w-[1140px] m-auto px-4 py-0 sm308:py-28 sm:py-40">
      <div className="w-full h-[22rem] sm308:h-80 sm600:h-96 absolute -top-16 sm308:top-32 sm465:top-36 sm600:top-28 sm:top-40 left-0 flex flex-col justify-between items-center">
        <div className="w-full flex justify-center items-center animate-iconsAnimation1 px-20">
          <Link
            to="/"
            title="Gmail"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
          >
            <m.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.25,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-red-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                >
                  <SiGmail size={22} className="text-red-500" />
                </m.div>
              </div>
            </m.div>
          </Link>
        </div>
        <div className="w-full flex justify-end items-center animate-iconsAnimation2 px-4 sm465:px-20">
          <Link
            to="https://github.com/JustAlex-WebDev"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
          >
            <m.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.75,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-gray-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 2,
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                >
                  <FaGithub size={22} className="text-gray-500" />
                </m.div>
              </div>
            </m.div>
          </Link>
        </div>
        <div className="w-full flex justify-start items-center animate-iconsAnimation3 px-4 sm465:px-20">
          <Link
            to="https://www.linkedin.com/in/alexandar-valov-667567242/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
          >
            <m.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-blue-200 flex justify-center items-center rounded-full hover:scale-125 duration-300 ease-in-out">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.75,
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                >
                  <FaLinkedin size={22} className="text-blue-500" />
                </m.div>
              </div>
            </m.div>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[800px] m-auto mt-24 font-medium flex flex-col gap-6 justify-center items-left">
        <div className="overflow-hidden">
          <m.div
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            animate={{ transform: "translateY(0%)", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
            className="text-text-sm sm600:text-base"
          >
            Alexandar Valov
          </m.div>
        </div>
        <div className="overflow-hidden">
          <m.div
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            animate={{ transform: "translateY(0%)", opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
            className="text-4xl sm465:text-5xl sm600:text-6xl lg850:text-7xl"
          >
            Front-End
          </m.div>
        </div>
        <div className="overflow-hidden">
          <m.div
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            animate={{ transform: "translateY(0%)", opacity: 1 }}
            transition={{ delay: 1, duration: 0.75, ease: "easeInOut" }}
            className="text-4xl sm465:text-5xl sm600:text-6xl lg850:text-7xl pl-0 sm:pl-28"
          >
            Web Developer
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
