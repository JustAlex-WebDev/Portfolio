import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Define the shape of the context data
interface CursorContextData {
  dot: React.RefObject<HTMLImageElement>;
  cursor: string;
  mouseOverEvent: () => void;
  mouseOutEvent: () => void;
}

// Create the context with an initial value of undefined
export const CursorContext = createContext<CursorContextData | undefined>(
  undefined
);

// Define the props for the context provider
interface CursorContextProviderProps {
  children: ReactNode;
}

// Context provider component
const CursorContextProvider: React.FC<CursorContextProviderProps> = (props) => {
  // State to hold the current cursor type
  const [cursor, setCursor] = useState("default");

  // Delay for cursor animation
  const delay = 7;

  // Ref to the cursor dot element
  const dot = useRef<HTMLImageElement>(null);

  // Refs to control cursor visibility and choice
  const cursorVisible = useRef(true);
  const cursorChoice = useRef(false);

  // Refs to track cursor position
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  // Ref for animation frame request
  const requestRef = useRef<number | null>(null);

  // Effect to add event listeners for mouse interactions
  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    // Start the animation for cursor outline
    animateDotOutline();

    // Cleanup event listeners and animation frame on component unmount
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Toggle cursor visibility based on state
  const toggleCursorVisibility = () => {
    if (cursorVisible.current && dot.current) {
      dot.current.style.display = "block";
      dot.current.style.opacity = "1";
    } else if (dot.current) {
      dot.current.style.display = "none";
    }
  };

  // Change cursor style based on its choice state
  const toggleCursors = () => {
    if (cursorChoice.current && dot.current) {
      setCursor("pointer");
      dot.current.style.opacity = "1";
      dot.current.style.transform = "translate(-50%,-50%) scale(1.25)";
    } else if (dot.current) {
      setCursor("default");
      dot.current.style.opacity = "1";
      dot.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  // Event handler for mouse over
  const mouseOverEvent = () => {
    cursorChoice.current = true;
    toggleCursors();
  };

  // Event handler for mouse out
  const mouseOutEvent = () => {
    cursorChoice.current = false;
    toggleCursors();
  };

  // Event handler for mouse enter
  const mouseEnterEvent = () => {
    cursorChoice.current = true;
    toggleCursorVisibility();
  };

  // Event handler for mouse leave
  const mouseLeaveEvent = () => {
    cursorChoice.current = false;
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  // Event handler for mouse movement
  const mouseMoveEvent = (e: MouseEvent) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    if (dot.current) {
      dot.current.style.top = `${endY.current}px`;
      dot.current.style.left = `${endX.current}px`;
    }
  };

  // Animation function for the cursor outline
  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  // Provide context value to children components
  return (
    <CursorContext.Provider
      value={{
        dot,
        cursor,
        mouseOverEvent,
        mouseOutEvent,
      }}
    >
      {props.children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the CursorContext
export const useCursorContext = (): CursorContextData => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error(
      "useCursorContext must be used within a CursorContextProvider"
    );
  }
  return context;
};

export default CursorContextProvider;
