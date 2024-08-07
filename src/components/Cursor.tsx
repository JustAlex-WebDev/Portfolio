import React from "react";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";

const Cursor: React.FC = () => {
  // Get the current location from the router
  const location = useLocation();

  // Custom cursor context
  const { dot, cursor } = useCursorContext();

  // Determine the cursor image based on the current location and cursor type
  const getCursorImage = () => {
    if (cursor === "default") {
      return location.pathname === "/work" || location.pathname === "/contact"
        ? "cursorDefaultColored.png"
        : "cursorDefault.png";
    } else {
      return location.pathname === "/work" || location.pathname === "/contact"
        ? "cursorPointerColored.png"
        : "cursorPointer.png";
    }
  };

  return (
    // Hide cursor for mobile devices
    <div className={`${isMobile ? "hidden" : "block"}`}>
      <img
        ref={dot}
        src={getCursorImage()}
        className="cursor-dot relative z-50"
        alt={`${cursor === "default" ? "Default" : "Pointer"} Cursor`}
      />
    </div>
  );
};

export default Cursor;
