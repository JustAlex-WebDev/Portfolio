import React from "react";
import { useInView } from "react-intersection-observer";
import { useCursorContext } from "../../context/CursorContext";

const ContactSection = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();

  return (
    <div className="w-full bg-[#f8f8f8] mt-12 pb-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1140px] px-4 py-20 mb-2 flex justify-between items-center gap-8 border-b-2 border-gray-300">
        <div
          ref={myRef1}
          className="text-3xl sm:text-4xl font-medium overflow-hidden"
        >
          <div className="overflow-hidden">
            <div
              className={`${
                myElementIsVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              } duration-300 ease-in-out`}
            >
              Let's work
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`${
                myElementIsVisible1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              } duration-300 ease-in-out delay-300`}
            >
              together
            </div>
          </div>
        </div>
        <div
          ref={myRef2}
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className={`${
            myElementIsVisible2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          } bg-black hover:bg-white text-white hover:text-black text-xs sm:text-sm text-center font-medium w-20 sm:w-24 h-20 sm:h-24 rounded-full flex justify-center items-center hover:scale-110 hover:border-black hover:border-2 duration-300 ease-in-out`}
        >
          Write an
          <br />
          Email
        </div>
      </div>
      <div className="w-full max-w-[1140px] px-4 flex justify-between items-center text-xs sm:text-sm text-gray-500">
        <div className="text-left">© 2023 All Rights Reserved</div>
        <div className="text-right">Designed and developed by me</div>
      </div>
    </div>
  );
};

export default ContactSection;
