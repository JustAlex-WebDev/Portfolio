import React from "react";
import { useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";
import { isMobile } from "react-device-detect";

const Cursor = () => {
  const location = useLocation();
  const { dot, dotOutline, cursor } = useCursorContext();

  return (
    <div className={`${isMobile ? "hidden" : "block"}`}>
      <div ref={dotOutline} className="cursor-dot-outline relative z-50"></div>

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
