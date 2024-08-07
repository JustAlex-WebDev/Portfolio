import React from "react";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";
import WonderPage from "../components/Projects/WonderPage";

const Wonder: React.FC = () => {
  return (
    <div className="z-30 relative">
      <ProjectsAnimation />
      <WonderPage />
    </div>
  );
};

export default Wonder;
