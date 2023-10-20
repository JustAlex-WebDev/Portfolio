import React from "react";
import { motion as m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useCursorContext } from "../../context/CursorContext";

const LandingPage = () => {
  const location = useLocation();
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <div className="z-40 relative">
        {/* Navigation Left */}
        <div className="z-50 w-full md:w-28 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 fixed text-xs font-medium">
          <div className="ml-8 md:ml-0 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              Gmail
            </Link>
          </div>
          <div className="mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://github.com/JustAlex-WebDev"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              {/* {window.innerWidth < 500 ? "GH" : "GitHub"} */}
              GitHub
            </Link>
          </div>
          <div className="md:mb-8 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://www.linkedin.com/in/alexandar-valov-667567242/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50 duration-300 ease-in-out"
            >
              LinkedIn
            </Link>
          </div>
          <div className="w-0 sm500:w-24 md:w-[1px] h-[1px] md:h-24 bg-[#1a1818] md:mt-2 md:mb-20"></div>
          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1">
              <span>©</span> <span>/</span> <span>2023</span>
            </div>
          </div>
        </div>

        {/* Landing Page */}
        <div className="w-full h-screen flex flex-col xl1100:flex-row pt-28 md:pt-60 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-8 sm500:gap-4 md:gap-12 xl1100:gap-20 px-8 md:px-20">
          <div className="w-full xl1100:w-[35%] h-auto xl1100:h-full flex justify-start md:justify-center xl:justify-end items-end xl1100:items-center">
            <div className="w-3/4 xl1100:w-full xl:w-3/4 h-auto flex flex-col justify-center items-start gap-4 mt-0 xl1100:mt-[50%] font-medium">
              <div className="overflow-hidden mb-2">
                <m.div
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className="uppercase font-semibold tracking-wider text-sm sm500:text-base"
                >
                  Alexandar Valov
                </m.div>
              </div>
              <div className="overflow-hidden">
                <m.div
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.75,
                  }}
                  className="text-xs sm500:text-sm"
                >
                  Front-End Web Developer / UX-UI Designer
                </m.div>
              </div>
              <div className="overflow-hidden">
                <m.div
                  initial={{ transform: "translateY(100%)" }}
                  animate={{ transform: "translateY(0%)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.75,
                  }}
                  className="text-xs sm500:text-sm"
                >
                  Passionate about developing responsive, visually appealing and
                  complex applications.
                </m.div>
              </div>
            </div>
          </div>
          <m.div
            initial={{ filter: "blur(50px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="w-full xl1100:w-[70%] h-auto xl1100:h-full flex justify-center items-start xl1100:items-center"
          >
            <div className="w-full md:w-3/4 xl1100:w-full flex flex-col justify-center items-start xl:pl-20">
              <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular -mb-[11%]">
                <Link
                  to="/work"
                  title="Work"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
                >
                  work
                </Link>
              </div>
              <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular -mb-[11%]">
                <Link
                  to="/about"
                  title="About"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
                >
                  about
                </Link>
              </div>
              <div className="uppercase text-[16vw] sm500:text-[18vw] md:text-[13vw] xl1100:text-[11vw] tracking-tighter Avegas-Royale-Regular">
                <Link
                  to="/contact"
                  title="Contact"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className="Avegas-Royale-Regular hover:opacity-50 duration-300 ease-in-out"
                >
                  contact
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </div>

      {/* Loading Animation */}
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
    </>

    // <div className="w-full relative max-w-[1140px] m-auto px-4 py-0 sm308:pb-28 sm308:pt-12 sm:pb-40 mt-28">
    //   <div className="w-full h-[22rem] sm308:h-80 sm600:h-96 absolute -top-44 sm308:top-12 sm465:top-6 sm600:-top-2 sm:top-10 left-0 flex flex-col justify-between items-center">
    //     <div className="w-full flex justify-center items-center animate-iconsAnimation1 px-20">
    //       <Link
    //         to="/"
    //         title="Gmail"
    // onMouseOver={mouseOverEvent}
    // onMouseOut={mouseOutEvent}
    //       >
    //         <m.div
    // initial={{ scale: 0.5, opacity: 0 }}
    // animate={{ scale: 1, opacity: 1 }}
    // transition={{
    //   delay: 1.25,
    //   duration: 0.75,
    //   ease: "easeInOut",
    // }}
    //         >
    //           <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-red-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out">
    //             <m.div
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{
    //                 delay: 1.5,
    //                 duration: 0.75,
    //                 ease: "easeInOut",
    //               }}
    //             >
    //               <SiGmail size={22} className="text-red-500" />
    //             </m.div>
    //           </div>
    //         </m.div>
    //       </Link>
    //     </div>
    //     <div className="w-full flex justify-end items-center animate-iconsAnimation2 px-4 sm465:px-20">
    //       <Link
    //         to="https://github.com/JustAlex-WebDev"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         title="GitHub"
    //         onMouseOver={mouseOverEvent}
    //         onMouseOut={mouseOutEvent}
    //       >
    //         <m.div
    //           initial={{ scale: 0.5, opacity: 0 }}
    //           animate={{ scale: 1, opacity: 1 }}
    //           transition={{
    //             delay: 1.75,
    //             duration: 0.75,
    //             ease: "easeInOut",
    //           }}
    //         >
    //           <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-gray-200 rounded-full flex justify-center items-center hover:scale-125 duration-300 ease-in-out">
    //             <m.div
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{
    //                 delay: 2,
    //                 duration: 0.75,
    //                 ease: "easeInOut",
    //               }}
    //             >
    //               <FaGithub size={22} className="text-gray-500" />
    //             </m.div>
    //           </div>
    //         </m.div>
    //       </Link>
    //     </div>
    //     <div className="w-full flex justify-start items-center animate-iconsAnimation3 px-4 sm465:px-20">
    //       <Link
    //         to="https://www.linkedin.com/in/alexandar-valov-667567242/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         title="LinkedIn"
    //         onMouseOver={mouseOverEvent}
    //         onMouseOut={mouseOutEvent}
    //       >
    //         <m.div
    //           initial={{ scale: 0.5, opacity: 0 }}
    //           animate={{ scale: 1, opacity: 1 }}
    //           transition={{
    //             delay: 1.5,
    //             duration: 0.75,
    //             ease: "easeInOut",
    //           }}
    //         >
    //           <div className="w-8 sm308:w-10 sm465:w-12 h-8 sm308:h-10 sm465:h-12 bg-blue-200 flex justify-center items-center rounded-full hover:scale-125 duration-300 ease-in-out">
    //             <m.div
    //               initial={{ opacity: 0 }}
    //               animate={{ opacity: 1 }}
    //               transition={{
    //                 delay: 1.75,
    //                 duration: 0.75,
    //                 ease: "easeInOut",
    //               }}
    //             >
    //               <FaLinkedin size={22} className="text-blue-500" />
    //             </m.div>
    //           </div>
    //         </m.div>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="w-full max-w-[800px] m-auto mt-24 font-medium flex flex-col gap-6 justify-center items-left">
    //     <div className="overflow-hidden">
    //       <m.div
    //         initial={{ transform: "translateY(100%)", opacity: 0 }}
    //         animate={{ transform: "translateY(0%)", opacity: 1 }}
    //         transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
    //         className="text-text-sm sm600:text-base"
    //       >
    //         Alexandar Valov
    //       </m.div>
    //     </div>
    //     <div className="overflow-hidden">
    //       <m.div
    //         initial={{ transform: "translateY(100%)", opacity: 0 }}
    //         animate={{ transform: "translateY(0%)", opacity: 1 }}
    //         transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
    //         className="text-4xl sm465:text-5xl sm600:text-6xl lg850:text-7xl"
    //       >
    //         Front-End
    //       </m.div>
    //     </div>
    //     <div className="overflow-hidden">
    //       <m.div
    //         initial={{ transform: "translateY(100%)", opacity: 0 }}
    //         animate={{ transform: "translateY(0%)", opacity: 1 }}
    //         transition={{ delay: 1, duration: 0.75, ease: "easeInOut" }}
    //         className="text-4xl sm465:text-5xl sm600:text-6xl lg850:text-7xl pl-0 sm:pl-28"
    //       >
    //         Web Developer WORK
    //       </m.div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingPage;
