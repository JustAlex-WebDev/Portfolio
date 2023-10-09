import React from "react";
import { useCursorContext } from "../../context/CursorContext";

const ContactSection = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full bg-[#f8f8f8] mt-12 pb-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1140px] px-4 py-20 mb-2 flex justify-between items-center gap-8 border-b-2 border-gray-300">
        <div className="text-4xl font-medium">
          Let's work
          <br />
          together
        </div>
        <div
          onMouseOver={mouseOverEvent}
          onMouseOut={mouseOutEvent}
          className="bg-black hover:bg-white text-white hover:text-black text-sm text-center font-medium w-24 h-24 rounded-full flex justify-center items-center hover:scale-110 hover:border-black hover:border-2 duration-300 ease-in-out"
        >
          Write an Email
        </div>
      </div>
      <div className="w-full max-w-[1140px] px-4 flex justify-between items-center text-sm text-gray-500">
        <div>© 2023 All Rights Reserved</div>
        <div>Designed and developed by me</div>
      </div>
    </div>
  );
};

export default ContactSection;
