import React from "react";
import { motion as m } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <m.div
        initial={{ transform: "translateY(0%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      ></m.div>
      <m.div
        initial={{ transform: "translateY(30%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 1,
          ease: "ease",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      ></m.div>
    </div>
  );
};

export default LoadingAnimation;
