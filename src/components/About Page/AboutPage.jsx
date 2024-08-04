import React from "react";
import { motion as m } from "framer-motion";
import { useCursorContext } from "../../context/CursorContext";
import { Link } from "react-router-dom";
import myCV from "../../CV/my CV.pdf";

const AboutPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="relative w-full h-auto flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20">
      <div className="w-full xl1100:w-[60%] h-auto flex flex-col justify-start md:justify-start items-start md:ml-20 xl1100:ml-60 pb-20 md:pt-20">
        <div className="overflow-hidden w-full xl1100:-mb-10">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            className="Avegas-Royale-Regular text-[20vw] sm500:text-[22vw] md:text-[15vw]"
          >
            About
          </m.div>
        </div>
        <div className="z-40 relative w-full bg-[#ece7e1]">
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start gap-8">
            <div className="Avegas-Royale-Regular ml-[5%] text-[5vw] md:text-[2.5vw] leading-6 sm350:leading-8 sm500:leading-10 xl:leading-[3rem]">
              I'm Alexandar. A web developer, designer and problem solver.
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7 mt-4">
              The cusp of art and technology has always fascinated me and I've
              never been afraid to just jump in and give it a go, whether it's
              Javascript, CSS, Firebase or Figma. I’ve been developing and
              designing websites since the day I first bought my computer.
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              What excites me most about being a Web Developer is being able to
              develope and design things that have purpose and solve real
              problems. It goes beyond designing buttons and websites and
              involves having a passion for designing experiences and solutions
              that help people, whether it's helping them market themselves
              online, or buy something online. Leaning into customer insight and
              understanding their needs, finding the right problems to solve,
              delivering solutions as quickly as possible, learning from those
              and then iterating and improving that value over time is the key
              to great web developer.
            </div>
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              skills
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div>
                  <span className="font-medium">Front-End Development:</span>{" "}
                  React, TypeScript, JavaScript, HTML, CSS, Tailwind, Sass
                </div>

                <div>
                  <span className="font-medium">Design & Tools:</span> Figma,
                  Adobe Photoshop, UX/UI Design, Graphic Design
                </div>
                <div>
                  <span className="font-medium">Back-End & Services:</span>{" "}
                  Firebase, Git, Postman
                </div>
                <div>
                  <span className="font-medium">
                    Optimization & Methodologies:
                  </span>{" "}
                  SEO Optimization, Agile Methodologies, CMS Design &
                  Architecture
                </div>
              </div>
            </div>
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href={myCV}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out">
                My CV
              </div>
            </a>
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              experience
            </div>
            <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                  Buglab
                </div>
                <div className="text-xs mb-2">Dec 2023 - Sep 2024</div>
                <div className="opacity-75 mb-2">
                  Spellcheck for UI that provides a no-code automated visual
                  testing tool that eliminates manual errors, ensuring a
                  flawless user experience despite updates.
                </div>
                <div>
                  Role - <span className="opacity-75">Front-end Developer</span>
                </div>
                <div>
                  Responsibilities -{" "}
                  <span className="opacity-75">
                    Web Development / Structure & Design / Research &
                    Optimization / SEO Optimization
                  </span>
                </div>
                <div>
                  GitHub -{" "}
                  <span className="opacity-75">github.com/buglabAI</span>
                </div>
                <div>
                  URL - <span className="opacity-75">buglab.ai</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                  Freelancing
                </div>
                <div className="text-xs mb-2">Dec 2022 - Nov 2023</div>
              </div>
            </div>
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 ml-[4%]">
              education
            </div>
            <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                  University of Plovdiv "Paisii Hilendarski"
                </div>
                <div className="opacity-75">
                  Bachelor's degree, Computer Software Engineering
                </div>
                <div className="text-xs">Jul 2023 - Jul 2027</div>
              </div>

              <div className="flex flex-col">
                <div className="font-medium leading-5 text-sm sm500:text-base">
                  Cambridge Advanced Certificate <br />
                  in English (CAE)
                </div>
                <div className="text-xs">Nov 2022</div>
              </div>
            </div>
            <Link
              to="mailto:alexvulov123@gmail.com"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
