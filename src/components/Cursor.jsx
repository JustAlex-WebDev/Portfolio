import React from "react";
import { useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";
import { isMobile } from "react-device-detect";

const Cursor = () => {
  const location = useLocation();
  const { dot, cursor } = useCursorContext();

  return (
    <div className={`${isMobile ? "hidden" : "block"}`}>
      {cursor === "default" ? (
        <>
          {location.pathname === "/work" || location.pathname === "/contact" ? (
            <img
              ref={dot}
              src="cursorDefaultColored.png"
              className="cursor-dot relative z-50"
              alt=""
            />
          ) : (
            <img
              ref={dot}
              src="cursorDefault.png"
              className="cursor-dot relative z-50"
              alt=""
            />
          )}
        </>
      ) : (
        <>
          {location.pathname === "/work" || location.pathname === "/contact" ? (
            <img
              ref={dot}
              src="cursorPointerColored.png"
              className="cursor-dot relative z-50"
              alt=""
            />
          ) : (
            <img
              ref={dot}
              src="cursorPointer.png"
              className="cursor-dot relative z-50"
              alt=""
            />
          )}
        </>
      )}
    </div>
  );
};

export default Cursor;
