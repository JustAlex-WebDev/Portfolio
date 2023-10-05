import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useCursorContext } from "../../context/CursorContext";

const SelectedProjects = () => {
  const { mouseOverProjectsEvent, mouseOutProjectsEvent } = useCursorContext();

  return (
    <div className="w-full bg-[#f8f8f8] mt-48 mb-12 flex justify-center items-center">
      <div className="w-full max-w-[1140px] px-4 py-20 flex flex-col justify-center items-left gap-8">
        <div className="text-4xl font-medium mb-20">
          <div>Selected</div>
          <div className="pl-10 pt-2">Projects</div>
        </div>
        <div className="w-full flex justify-center items-end gap-16">
          <div
            onMouseOver={mouseOverProjectsEvent}
            onMouseOut={mouseOutProjectsEvent}
            className="w-1/2 flex flex-col gap-6 group"
          >
            <div className="w-full h-[30rem] bg-gray-300">Wonder</div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-medium">Wonder</div>
                <div className="text-sm">Social Media Application</div>
              </div>
              <div className="bg-transparent group-hover:bg-orange-400 p-2 rounded-full shadow-gray-300 shadow-none group-hover:shadow-sm duration-300 ease-in-out">
                <BsArrowRight
                  size={24}
                  className="group-hover:-rotate-45 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div
            onMouseOver={mouseOverProjectsEvent}
            onMouseOut={mouseOutProjectsEvent}
            className="w-1/2 flex flex-col gap-6 group"
          >
            <div className="w-full h-[37.5rem] -mt-[7.5rem] bg-gray-300">
              Art Connection
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-medium">Art Connection</div>
                <div className="text-sm">E-Commerce Website</div>
              </div>
              <div className="bg-transparent group-hover:bg-orange-400 p-2 rounded-full shadow-gray-300 shadow-none group-hover:shadow-sm duration-300 ease-in-out">
                <BsArrowRight
                  size={24}
                  className="group-hover:-rotate-45 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
