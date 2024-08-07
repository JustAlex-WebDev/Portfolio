import React from "react";
import { motion as m } from "framer-motion";

const ProjectsAnimation: React.FC = () => {
  return (
    <div className="absolute top-24 md:top-0 left-0 w-full h-screen overflow-hidden">
      {/* First animation layer */}
      <m.div
        initial={{ transform: "translateY(-100%)" }}
        animate={{ transform: "translateY(-30%)" }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "easeIn",
        }}
        className="absolute top-0 left-[2rem] md:left-[12.5%] xl1100:left-[7.5%] right-[2rem] md:right-[12.5%] xl1100:right-[7.5%] w-[calc(100%-4rem)] md:w-[75%] xl1100:w-[85%] h-[50%] sm350:h-[70%] sm:h-[85%] md:h-[90%] bg-[#1a1818] z-50"
      ></m.div>

      {/* Second animation layer */}
      <m.div
        initial={{ transform: "translateY(-130%)" }}
        animate={{ transform: "translateY(0%)" }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          ease: "ease",
        }}
        className="absolute top-0 left-[2rem] md:left-[12.5%] xl1100:left-[7.5%] right-[2rem] md:right-[12.5%] xl1100:right-[7.5%] w-[calc(100%-4rem)] md:w-[75%] xl1100:w-[85%] h-[50%] sm350:h-[70%] sm:h-[85%] md:h-[90%] bg-[#1a1818] z-50"
      ></m.div>
    </div>
  );
};

export default ProjectsAnimation;
