import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../context/CursorContext";

const Navigation = () => {
  const location = useLocation();
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  const [windowWidth, setWindowWidth] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="z-40 relative">
      {location.pathname !== "/" ? (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 fixed text-[11px] sm500:text-xs font-medium">
          <div className="md:w-16 md:mb-8 ml-8 md:ml-0 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="/"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="uppercase hover:opacity-50 duration-300 ease-in-out"
            >
              H o m e
            </Link>
          </div>
          <div className="w-0 sm350:w-12 sm500:w-24 md:w-[1px] h-[1px] md:h-24 bg-[#1a1818] md:mt-2 md:mb-20"></div>
          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 fixed text-[11px] sm500:text-xs font-medium">
          <div className="ml-8 md:ml-0 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              {windowWidth.innerWidth < 500 ? "G M" : "Gmail"}
            </Link>
          </div>
          <div className="mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://github.com/JustAlex-WebDev"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              {windowWidth.innerWidth < 500 ? "G H" : "GitHub"}
            </Link>
          </div>
          <div className="md:mb-8 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://www.linkedin.com/in/alexandar-valov-667567242/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              {windowWidth.innerWidth < 500 ? "L I" : "LinkedIn"}
            </Link>
          </div>
          <div className="w-0 sm350:w-12 sm500:w-24 md:w-[1px] h-[1px] md:h-24 bg-[#1a1818] md:mt-2 md:mb-20"></div>
          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
