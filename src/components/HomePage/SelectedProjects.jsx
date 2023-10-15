import React from "react";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
import { useCursorContext } from "../../context/CursorContext";

const SelectedProjects = () => {
  const { mouseOverProjectsEvent, mouseOutProjectsEvent } = useCursorContext();
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView();

  return (
    <div className="w-full bg-[#f8f8f8] mt-48 mb-12 flex justify-center items-center">
      <div className="w-full max-w-[1140px] px-4 py-20 flex flex-col justify-center items-left gap-8">
        <div
          ref={myRef1}
          className="text-3xl sm465:text-4xl font-medium mb-20 overflow-hidden"
        >
          <div
            className={`${
              myElementIsVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            } overflow-hidden duration-1000 ease-in-out`}
          >
            <div>Selected</div>
          </div>
          <div
            className={`${
              myElementIsVisible1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            } overflow-hidden duration-1000 ease-in-out delay-75`}
          >
            <div className="pl-10 pt-2">Projects</div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-end gap-16">
          <div
            ref={myRef2}
            onMouseOver={mouseOverProjectsEvent}
            onMouseOut={mouseOutProjectsEvent}
            className="w-full md:w-1/2 flex flex-col gap-6 group relative"
          >
            <div
              className={`${
                myElementIsVisible2 ? "h-0" : "h-full"
              } absolute top-0 left-0 rounded-2xl bg-[#f8f8f8] w-full duration-1000 ease-in-out`}
            ></div>
            <div className="w-full h-[27.5rem] bg-gray-300 rounded-2xl overflow-hidden">
              <img
                src="wonderMockup.jpg"
                alt=""
                className="w-full h-[27.5rem] object-cover rounded-2xl group-hover:scale-125 group-hover:animate-panImage  duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-medium">Wonder</div>
                <div className="text-sm">Social Media Application</div>
              </div>
              <div className="bg-transparent group-hover:bg-black text-black group-hover:text-white group-hover:-rotate-45 p-2 rounded-full shadow-gray-300 shadow-none group-hover:shadow-sm duration-300 ease-in-out">
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
          <div
            ref={myRef3}
            onMouseOver={mouseOverProjectsEvent}
            onMouseOut={mouseOutProjectsEvent}
            className="w-full md:w-1/2 flex flex-col gap-6 group relative"
          >
            <div
              className={`${
                myElementIsVisible3 ? "h-0" : "h-full"
              } absolute top-0 md:-top-[7.5rem] left-0 rounded-2xl bg-[#f8f8f8] w-full duration-1000 ease-in-out`}
            ></div>
            <div className="w-full h-[27.5rem] md:h-[37.5rem] mt-0 md:-mt-[7.5rem] bg-gray-300 rounded-2xl overflow-hidden">
              <img
                src="artconnectionMockup.jpg"
                alt=""
                className="w-full h-[27.5rem] md:h-[37.5rem] object-cover rounded-2xl group-hover:scale-125 group-hover:animate-panImage duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-medium">Art Connection</div>
                <div className="text-sm">E-Commerce Website</div>
              </div>
              <div className="bg-transparent group-hover:bg-black text-black group-hover:text-white group-hover:-rotate-45 p-2 rounded-full shadow-gray-300 shadow-none group-hover:shadow-sm duration-300 ease-in-out">
                <BsArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjects;
