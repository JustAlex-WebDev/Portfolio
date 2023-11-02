import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const ArtConnectionPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-screen flex justify-center items-center -mb-72 md:-mb-20">
        <div className="relative z-50 w-full h-[15%] sm350:h-1/2 sm:h-[80%] md:h-[70%] flex justify-center items-end text-[#ece7e1]">
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
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-full flex flex-col justify-center items-center gap-16 sm350:gap-24 xl1100:gap-32 xxl:gap-48 mb-20 px-8 mt-0 sm350:mt-48 sm:mt-80 md:mt-16 xl1100:mt-24 ">
        <div className="overflow-hidden w-full flex justify-center items-center text-center">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 1.25,
              ease: "easeOut",
            }}
            className="w-[100%] sm500:w-[70%] md:w-[45%] Avegas-Royale-Regular text-[5vw] sm350:text-[4vw] sm500:text-[3.25vw] sm:text-[3vw] md:text-[2.5vw] xl1100:text-[2.5vw] leading-[120%]"
          >
            Art Connection is the leading provider of framed art to designers,
            galleries, and art retailers with more than 32 years in the
            industry.
          </m.div>
        </div>
        <div className="w-full md:w-[85%] xl1100:w-[65%] flex flex-col xl1100:flex-row justify-center items-center xl1100:items-start gap-4 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                ROLE
              </div>
              <div>UI/UX Developer and Designer</div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                RESPONSIBILITIES
              </div>
              <div>
                React Development / Structure & Design / Firebase Integration /
                SEO Optimisation / Consultation
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/JustAlex-WebDev/E-Commerce-App"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://github.com/JustAlex-WebDev/E-Commerce-App
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://e-commerce-app-cf00d.web.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://e-commerce-app-cf00d.web.app/
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem]">
          <img
            src="./artconnectionMockup.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
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
        <div className="w-full sm350:w-[90%] md:w-[75%] h-auto">
          <img
            src="./artconnectionMockup2.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            After analysis of the old code, it turned out that it is of low
            quality and that adding new functionalities will be difficult and
            expensive, so my recommendation was to rewrite the application. The
            client agreed to this solution.
            <br />
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
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            The new application, Art Connection, although still in production,
            is faster, simpler to maintain the code.
            <br />
            <br />
            With the rewriting, the application has become scalable and possible
            to implement and use by other similar businesses.
            <br />
            <br />
            <span className="font-medium">
              The application is still under development and has not yet been
              deployed at the Client's company, but a fully functional
              demo/testing version of it is deployed.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-8 md:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://e-commerce-app-cf00d.web.app/"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-[#1a1818] text-[#ece7e1] w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2vw] md:text-[1vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
          >
            Art Connection
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArtConnectionPage;
