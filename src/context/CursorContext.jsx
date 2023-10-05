import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [cursor, setCursor] = useState("default");
  const delay = 7;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorChoice = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mousedown", mouseOverProjectsEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mouseup", mouseOutProjectsEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mousedown", mouseOverProjectsEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mouseup", mouseOutProjectsEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  });

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.display = "block";
      dotOutline.current.style.display = "block";
      dotOutline.current.style.opacity = 1;
      dot.current.style.opacity = 1;
    } else {
      dot.current.style.display = "none";
      dotOutline.current.style.display = "none";
    }
  };

  const toggleCursors = () => {
    if (cursorChoice.current) {
      setCursor("pointer");
      dotOutline.current.style.border = "none";
      dot.current.style.opacity = 1;
      dot.current.style.transform = "translate(-50%,-50%) scale(1.25)";
    } else {
      setCursor("default");
      dotOutline.current.style.border = "2px solid #e6e6e6";
      dot.current.style.opacity = 1;
      dot.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  const toggleProjectsCursors = () => {
    if (cursorChoice.current) {
      setCursor("projects");
      dotOutline.current.style.opacity = 1;
      dot.current.style.opacity = 1;
      dotOutline.current.style.backgroundColor = "white";
      dotOutline.current.style.border = "none";
      dot.current.style.border = "translate(-50%,-50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%,-50%) scale(1.75)";
    } else {
      setCursor("default");
      dotOutline.current.style.opacity = 1;
      dot.current.style.opacity = 1;
      dotOutline.current.style.backgroundColor = "transparent";
      dotOutline.current.style.border = "2px solid #e6e6e6";
      dot.current.style.transform = "translate(-50%,-50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorChoice.current = true;
    toggleCursors();
  };

  const mouseOverProjectsEvent = () => {
    cursorChoice.current = true;
    toggleProjectsCursors();
  };

  const mouseOutEvent = () => {
    cursorChoice.current = false;
    toggleCursors();
  };

  const mouseOutProjectsEvent = () => {
    cursorChoice.current = false;
    toggleProjectsCursors();
  };

  const mouseEnterEvent = () => {
    cursorChoice.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorChoice.current = false;
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <CursorContext.Provider
      value={{
        dot,
        dotOutline,
        cursor,
        mouseOverEvent,
        mouseOverProjectsEvent,
        mouseOutEvent,
        mouseOutProjectsEvent,
      }}
    >
      {props.children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => useContext(CursorContext);

export default CursorContextProvider;
