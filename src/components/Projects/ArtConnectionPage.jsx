import React from "react";
import { motion as m } from "framer-motion";

const ArtConnectionPage = () => {
  return (
    <div className="bg-[#ece7e1] text-[#1a1818] w-full h-screen flex flex-col justify-center items-center">
      <div className="relative z-50 w-full h-[15%] sm350:h-[50%] sm:h-[80%] md:h-[70%] flex justify-center items-end text-[#ece7e1]">
        <div className="w-full text-center overflow-hidden px-4">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeOut",
            }}
            className="text-[13vw] md:text-[11vw] flex flex-col justify-center items-center"
          >
            <div className="Avegas-Royale-Regular -mb-[5%]">Art</div>
            <div className="Avegas-Royale-Regular">Connection</div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default ArtConnectionPage;
