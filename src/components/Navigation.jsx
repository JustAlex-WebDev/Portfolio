import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";

const Navigation = () => {
  const location = useLocation();
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full max-w-[1140px] m-auto px-4 py-6 text-xs xxsm:text-sm flex justify-between items-center">
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
          to="/playground"
          title="Playground"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="opacity-50 hover:opacity-100 font-medium duration-300 ease-in-out"
        >
          Playground
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
        <Link
          to="/contact"
          title="Contact"
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="opacity-50 hover:opacity-100 font-medium duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
