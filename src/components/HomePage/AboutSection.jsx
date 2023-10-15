import React from "react";
import { useInView } from "react-intersection-observer";
import { useCursorContext } from "../../context/CursorContext";

const AboutSection = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView();
  const { ref: myRef4, inView: myElementIsVisible4 } = useInView();
  const { ref: myRef5, inView: myElementIsVisible5 } = useInView();
  const { ref: myRef6, inView: myElementIsVisible6 } = useInView();

  return (
    <div className="w-full relative max-w-[1140px] m-auto px-4 py-[28rem] sm:py-72 flex flex-col justify-center items-center gap-16">
      <div
        ref={myRef1}
        className={`${
          myElementIsVisible1 ? "opacity-100" : "opacity-0"
        } text-center text-xl font-medium duration-1000 ease-in-out delay-300`}
      >
        I have passion for creating user
        <br /> experiences that are seamless,
        <br /> meaningful and impactful.
      </div>
      <div
        ref={myRef2}
        className={`${
          myElementIsVisible2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } duration-500 ease-in-out delay-500`}
      >
        <div
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="bg-black hover:bg-white text-white hover:text-black text-sm font-medium w-24 h-24 rounded-full flex justify-center items-center hover:scale-125 hover:border-black hover:border-2 duration-300 ease-in-out"
        >
          About me
        </div>
      </div>
      <div
        ref={myRef3}
        className={`${
          myElementIsVisible3 ? "opacity-100" : "opacity-0"
        } absolute top-20 left-4 sm500:left-20 sm600:left-28 sm:left-4 lg850:left-20 w-28 sm368:w-36 sm:w-28 md:w-36 h-40 sm368:h-48 sm:h-40 md:h-48 rounded-2xl duration-1000 ease-in-out`}
      >
        <img
          src="wonderMockup2.jpeg"
          alt=""
          className="w-36 h-48 object-cover object-top rounded-2xl"
        />
      </div>
      <div
        ref={myRef4}
        className={`${
          myElementIsVisible4 ? "opacity-100" : "opacity-0"
        } absolute top-40 right-4 sm500:right-20 sm600:right-28 sm:right-4 lg850:right-20 w-28 sm368:w-36 sm:w-28 md:w-36 h-52 sm368:h-60 sm:h-52 md:h-60 rounded-2xl duration-1000 ease-in-out`}
      >
        <img
          src="wonderMockup2.jpeg"
          alt=""
          className="w-36 h-60 object-cover object-center rounded-2xl"
        />
      </div>
      <div
        ref={myRef5}
        className={`${
          myElementIsVisible5 ? "opacity-100" : "opacity-0"
        } absolute bottom-40 left-4 sm500:left-20 sm600:left-28 sm:left-24 lg850:left-48 w-28 sm368:w-36 sm:w-28 md:w-36 h-52 sm368:h-60 sm:h-52 md:h-60 rounded-2xl duration-1000 ease-in-out`}
      >
        <img
          src="artconnectionMockup3.jpeg"
          alt=""
          className="w-36 h-60 object-cover object-top rounded-2xl"
        />
      </div>
      <div
        ref={myRef6}
        className={`${
          myElementIsVisible6 ? "opacity-100" : "opacity-0"
        } absolute bottom-20 right-4 sm500:right-20 sm600:right-28 sm:right-24 lg850:right-48 w-28 sm368:w-36 sm:w-28 md:w-36 h-40 sm368:h-48 sm:h-40 md:h-48 rounded-2xl duration-1000 ease-in-out`}
      >
        <img
          src="artconnectionMockup3.jpeg"
          alt=""
          className="w-36 h-48 object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutSection;
