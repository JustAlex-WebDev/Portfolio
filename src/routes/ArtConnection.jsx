import React from "react";
import ArtConnectionPage from "../components/Projects/ArtConnectionPage";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";

const ArtConnection = () => {
  return (
    <div className="z-30 relative">
      <ProjectsAnimation />
      <ArtConnectionPage />
    </div>
  );
};

export default ArtConnection;
