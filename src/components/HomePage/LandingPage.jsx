import React from "react";
import { motion as m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../../context/CursorContext";

const LandingPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full h-screen flex flex-col xl1100:flex-row pt-28 md:pt-60 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-8 sm500:gap-4 md:gap-12 xl1100:gap-20 px-8 md:px-20">
      <div className="w-full xl1100:w-[35%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center">
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4 mt-0 xl1100:mt-[50%]">
          <div className="overflow-hidden mb-2">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="uppercase font-medium tracking-wider text-sm sm500:text-base"
            >
              Alexandar Valov
            </m.div>
          </div>
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-xs sm500:text-sm"
            >
              Front-End Web Developer / UX-UI Designer
            </m.div>
          </div>
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-xs sm500:text-sm"
            >
              Passionate about developing responsive, visually appealing and
              complex applications.
            </m.div>
          </div>
        </div>
      </div>
      <m.div
        initial={{ filter: "blur(50px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="w-full xl1100:w-[70%] h-auto xl1100:h-full flex justify-center items-start xl1100:items-center"
      >
        <div className="w-full md:w-3/4 xl1100:w-full flex flex-col justify-center items-start pl-0 sm500:pl-4 md:pl-0 xl:pl-20">
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular -mb-[7%] sm500:-mb-[10%] md:-mb-[11%]">
            <Link
              to="/work"
              title="Work"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
            >
              work
            </Link>
          </div>
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular -mb-[7%] sm500:-mb-[10%] md:-mb-[11%]">
            <Link
              to="/about"
              title="About"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
            >
              about
            </Link>
          </div>
          <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular">
            <Link
              to="/contact"
              title="Contact"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
            >
              contact
            </Link>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default LandingPage;
