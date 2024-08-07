import { motion as m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const CryptoBasePage: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

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
              Crypto Base
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
            Crypto Base is a Personal Project, which is using Axious in order to
            connect to the CoinGecko API and make API calls.
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
                API Integration / React Development / Structure & Design /
                Authentication
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/JustAlex-WebDev/Crypto-App"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://github.com/JustAlex-WebDev/Crypto-App
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://cryptobase-6294f.web.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://cryptobase-6294f.web.app/
              </Link>
            </div>
          </div>
        </div>

        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[18.5rem] sm350:h-[20rem] sm500:h-[25rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./cryptobaseMockup.jpg"
            alt=""
            className="w-full h-full object-cover animate-panImage2 hover:scale-150 sm500:hover:scale-125 duration-300 ease-in-out"
          />
        </div>

        {/* Challenge */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Challenge
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Some of the most challenging things, were the insufficient
            documentation and all the testing that had to be done, in order to
            determine that the APIs is functional, realiable and secure.
            <br />
            <br />
            I had to make myself familiar with Postman. A popular tool for
            testing and organizing API requests. Additionally, Postman helped me
            authenticate APIs by generating tokens and access keys.
            <br />
            <br />
            Furthermore, companies nowadays become exposed to breaches if not
            carefully protected. Hackers also gain access to customer
            information, further adding insult to injury by affecting one's
            company's reputation. That is the reason why, it was so important
            for me to keep security a priority.
          </div>
        </div>

        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            After going through, what felt like an eternity of YouTube / Postman
            Turorials, I finnaly got the hang of it and started my own journey
            of experimenting.
            <br />
            <br />
            It was not long until I was able to connect to the CoinGecko API and
            make an API call. It could be even said, that it was all smooth
            sailing, after some more fails of course.
            <br />
            <br />
            React, React-Router-Dom, useContex, Tailwind and Axious are only
            some of the technologies used in the project.
          </div>
        </div>

        {/* Outcome */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            After all the "blood, sweat and tears", the project was fully
            developed and ready for users to learn more about their favourite
            crypto coin.
            <br />
            <br />
            This project, although not being as beatifull as some of my
            freelancing projects shown in this portfolio, it was definitely the
            most challenging and self-fulling projects that I have ever
            developed.
          </div>
        </div>

        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://github.com/JustAlex-WebDev/Crypto-App"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-[#1a1818] text-[#ece7e1] w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            Crypto Base
          </Link>
        </div>
      </div>
    </>
  );
};

export default CryptoBasePage;
