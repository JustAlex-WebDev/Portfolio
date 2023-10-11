import React from "react";
import { motion as m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../context/CursorContext";

const Navigation = () => {
  const location = useLocation();
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <m.div
      initial={{ transform: "translateY(-100%)", opacity: 0 }}
      animate={{ transform: "translateY(0%)", opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full max-w-[1140px] m-auto px-4 py-6 text-xs xxsm:text-sm flex justify-between items-center"
    >
      <Link
        to="/"
        title="Home"
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className={`${
          location.pathname === "/"
            ? "opacity-100"
            : "opacity-50 hover:opacity-100"
        } font-medium duration-300 ease-in-out`}
      >
        Home
      </Link>
      <div className="flex justify-center items-center gap-4 xsm:gap-8">
        <Link
          to="/projects"
          title="Projects"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="opacity-50 hover:opacity-100 font-medium duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          to="/about"
          title="About me"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="opacity-50 hover:opacity-100 font-medium duration-300 ease-in-out"
        >
          About me
        </Link>
        <div title="Contact" className="group relative">
          <div
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="flex justify-center items-center"
          >
            <div className="opacity-50 group-hover:opacity-100 font-medium duration-300 ease-in-out">
              Contact
            </div>
            <IoMdArrowDropdown
              size={20}
              className="-rotate-90 group-hover:rotate-0 duration-300 ease-in-out"
            />
          </div>
          <div className="w-28 h-0 group-hover:h-28 opacity-0 group-hover:opacity-100 bg-gray-200 absolute top-8 -left-8 flex flex-col justify-center items-start pl-4 gap-4 rounded-2xl z-50 duration-300 ease-in-out">
            <Link
              to="/"
              title="Gmail"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="flex justify-center items-center gap-2 hover:opacity-50 duration-300 ease-in-out"
            >
              <SiGmail size={14} />
              <div>Gmail</div>
            </Link>
            <Link
              to="/"
              title="Gmail"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="flex justify-center items-center gap-2 hover:opacity-50 duration-300 ease-in-out"
            >
              <FaLinkedin size={14} />
              <div>LinkedIn</div>
            </Link>
            <Link
              to="/"
              title="Gmail"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="flex justify-center items-center gap-2 hover:opacity-50 duration-300 ease-in-out"
            >
              <FaGithub size={14} />
              <div>GitHub</div>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Navigation;
