import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const ArtConnectionPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-screen flex justify-center items-center -mb-72 sm350:-mb-28 sm500:-mb-20 sm:mb-10 md:mb-10">
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
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-full flex flex-col justify-center items-center gap-12 sm500:gap-24 xl1100:gap-32 xxl:gap-48 mb-20">
        <div className="w-[65%] sm500:w-1/2 md:w-[40%] Avegas-Royale-Regular text-[3.5vw] sm500:text-[3vw] md:text-[2.25vw] xl1100:text-[2.5vw] leading-4 sm350:leading-6 sm:leading-8 xl1100:leading-10 xl:leading-[4rem]">
          Art Connection is the leading provider of framed art to designers,
          galleries, and art retailers with more than 32 years in the industry.
        </div>
        <div className="w-[90%] sm350:w-[85%] md:w-[60%] xl1100:w-[44%] flex justify-between gap-4 sm350:gap-8 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="font-semibold underline underline-offset-4">
              ROLE
            </div>
            <div>UI/UX Developer and Designer</div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="font-semibold underline underline-offset-4">
              RESPONSIBILITIES
            </div>
            <div>
              React Development / Structure & Design / Firebase Integration /
              SEO Optimisation / Consultation
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="font-semibold underline underline-offset-4">
              URL
            </div>
            <Link
              to="https://e-commerce-app-cf00d.web.app/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="hover:opacity-50"
            >
              https://e-commerce-app-cf00d.web.app/
            </Link>
          </div>
        </div>
        <div className="w-[90%] md:w-[75%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem]">
          <img
            src="./artconnectionMockup.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-[90%] sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Challenge
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            The client came with software that was already in production and
            wanted to develop new functions and fully transform the way the
            website felt and looked. <br />
            <br />
            The software was developed from 2016 to 2019 by the client's
            development team and collected valuable info, including business
            data. By August 2019 the company's database contained 2000 customer
            records. Each of these records included information on price,
            product, services and other related information.
            <br />
            <br /> After analyzing the client's current situation and
            technological needs, the conclusion was that adding new features
            introduced too much change to the codebase so it was decided to
            re-write it from scratch. <br />
            <br />
            With the new version of the app, two requirements appeared:
            universal - the possibility of easily and effectively change the
            codebase. scalable - ready for the big growth of Art Connection,
            increasing customer base and team.
          </div>
        </div>
        <div className="w-[90%] sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            After analysis of the old code, it turned out that it is of low
            quality and that adding new functionalities will be difficult and
            expensive, so my recommendation was to rewrite the application. The
            client agreed to this solution. <br />
            <br />
            The development was based on the plan created together with the
            owners, which included adding new features and a redesign and
            implementation of the new and updated UI/UX of the website.
            <br />
            <br /> Ongoing support and maintenance was also provided.
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
            The following technologies have been used: React for development,
            Firebase for hosting and stable/reliable database and Stripe for
            payment system integration.
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtConnectionPage;
