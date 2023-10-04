import React from "react";
import { useCursorContext } from "../context/CursorContext";

const Cursor = () => {
  const { dot, dotOutline, cursor } = useCursorContext();

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline relative z-50"></div>
      {cursor === "default" ? (
        <img
          ref={dot}
          src="cursorDefault.png"
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
  );
};

export default Cursor;
