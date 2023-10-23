import React from "react";
import WorkPage from "../components/Work Page/WorkPage";
import WorkAnimation from "../components/Work Page/WorkAnimation";

const Work = () => {
  return (
    <div className="z-30 relative">
      <WorkAnimation />
      <WorkPage />
    </div>
  );
};

export default Work;
