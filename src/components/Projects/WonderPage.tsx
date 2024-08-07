import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";
import useDimension from "../../hooks/useDimension";

const WonderPage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  // On Scroll Animation/Functionality
  const container = useRef<HTMLDivElement | null>(null);
  const dimension = useDimension();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.width < 768 ? dimension.height * 2 : dimension.height * 2.5]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      dimension.width < 640
        ? dimension.height * 1.8
        : dimension.width < 768
        ? dimension.height * 2.4
        : dimension.width < 1100
        ? dimension.height * 2.7
        : dimension.width < 1280
        ? dimension.height * 3
        : dimension.height * 3.3,
    ]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      dimension.width < 640
        ? dimension.height * 1.8
        : dimension.width < 768
        ? dimension.height * 2.4
        : dimension.width < 1280
        ? dimension.height * 2.7
        : dimension.height * 3,
    ]
  );

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-screen flex justify-center items-center -mb-72 md:-mb-20">
        <div className="relative z-50 w-full h-[15%] sm350:h-1/2 sm:h-[80%] md:h-[70%] flex justify-center items-end text-[#ece7e1]">
          <div className="w-full text-center overflow-hidden px-4 -mt-[5%]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeOut",
              }}
              className="Avegas-Royale-Regular text-[13vw] md:text-[11vw] flex justify-center items-center"
            >
              WONDER
            </m.div>
          </div>
        </div>
      </div>

      {/* About the project */}
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-full flex flex-col justify-center items-center gap-16 sm350:gap-24 xl1100:gap-32 xxl:gap-48 mb-20 px-8 mt-0 sm350:mt-48 sm:mt-80 md:mt-16 xl1100:mt-24 ">
        <div className="overflow-hidden w-full flex justify-center items-center text-center">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: "easeOut",
            }}
            className="w-[100%] sm500:w-[70%] md:w-[45%] Avegas-Royale-Regular text-[5vw] sm350:text-[4vw] sm500:text-[3.25vw] sm:text-[3vw] md:text-[2.5vw] leading-[120%]"
          >
            WONDER is a React full stack social media application. The app's
            goal is to expand one's circle of interests and help them grow as a
            person.
          </m.div>
        </div>

        {/* Role / Responsibilities / GitHub / URL */}
        <div className="w-full md:w-[85%] xl1100:w-[65%] flex flex-col xl1100:flex-row justify-center items-center xl1100:items-start gap-4 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                ROLE
              </div>
              <div>Web Development</div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                RESPONSIBILITIES
              </div>
              <div>
                Structure & Design / Firebase Integration / Authentication /
                Research & Optimization
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/JustAlex-WebDev/Social-Media-App"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://github.com/JustAlex-WebDev/Social-Media-App
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://social-media-app-2fe38.web.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://social-media-app-2fe38.web.app/
              </Link>
            </div>
          </div>
        </div>

        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./wonderMockup.jpg"
            alt=""
            className="w-full h-full object-cover animate-panImage hover:scale-125 duration-300 ease-in-out"
          />
        </div>

        {/* Challenge */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Challenge
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            The old version of the app was poorly written and one of the biggest
            issues was the state managment. Also, the way they managed all the
            posts was slow and out-dated.
            <br />
            <br />
            The state managment problem mentioned above was that after a user,
            uploaded a post and then deleted it, the post was still kept in the
            database.
            <br />
            <br />
            Consequently there was a lot more unnecessary data being stored,
            costing the company a fortune. This could have had a catastrophic
            effect on the company.
            <br />
            <br />
            After analyzing the client's current situation and technological
            needs, the conclusion was that a whole new state managing system was
            going to be required.
          </div>
        </div>

        {/* On Scroll Gallery */}
        <div className="w-full sm500:w-[85%] md:w-[65%]">
          <div
            ref={container}
            className="h-screen sm:h-[125vh] md:h-[150vh] xl:h-[175vh] flex gap-[2vw] rounded-[1vw] overflow-hidden"
          >
            {dimension.width < 640 ? null : (
              <m.div
                style={{ y: y1 }}
                className="w-1/4 h-full flex flex-col gap-[2vw] relative -top-[70%] xl:-top-[50%]"
              >
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img1.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img10.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img2.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img4.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </m.div>
            )}
            <m.div
              style={{ y: y2 }}
              className="w-1/2 sm500:w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[90%] sm:-top-[95%]"
            >
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img4.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img8.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img5.jpg"
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img2.jpg"
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </m.div>
            <m.div
              style={{ y: y3 }}
              className="w-1/2 sm500:w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[60%] sm:-top-[40%] xl:-top-[25%]"
            >
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img7.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img3.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img4.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="images/wonder/img10.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </m.div>
            {dimension.width < 500 ? null : (
              <m.div
                style={{ y: y4 }}
                className="w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[90%] sm:-top-[100%]"
              >
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img1.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img9.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img6.jpg"
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="images/wonder/img1.jpg"
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </m.div>
            )}
          </div>
        </div>

        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            After analysis of the old code, my recommendation was to rewrite the
            application with the intention of following a human-centered design
            philosophy over the steps of my design and development process. The
            client agreed to this solution.
            <br />
            <br />
            The development was based on the plan created together with the
            owners, which included adding new features, redesign and
            implementation of the new and updated state managing system.
            <br />
            <br />
            Ongoing support and maintenance was also provided.
            <br />
            <br />
            During the tests, the client was collecting feedback from end-users
            and changes were implemented.
            <br />
            <br />
            The last step was to assist and support the implementation of the
            application.
            <br />
            <br />
            Some of the technologies used throughout the development of this
            application are: React, Firebase and Tailwind. There are custom
            hooks, dynamic and protected routes and implemented authentication.
          </div>
        </div>

        {/* Outcome */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            The new application, WONDER is faster, more realiable and not only
            simpler, but cheaper to maintain as well.
            <br />
            <br />
            With the rewriting, the application has become not only a lot more
            scalable, but beatifull to look at too. Also, due to the rewriting
            of the state managment and eliminating the unnecessarily stored
            data, the company saved about 35% of their data managing expenses.
            <br />
            <br />
            <span className="font-medium">
              A fully functional demo/testing version of the application is
              deployed.
            </span>
          </div>
        </div>

        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://social-media-app-2fe38.web.app/"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-[#1a1818] text-[#ece7e1] w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            WONDER
          </Link>
        </div>
      </div>
    </>
  );
};

export default WonderPage;
