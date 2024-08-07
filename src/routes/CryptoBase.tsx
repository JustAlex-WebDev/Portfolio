import React from "react";
import CryptoBasePage from "../components/Projects/CryptoBasePage";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";

const CryptoBase: React.FC = () => {
  return (
    <div className="z-30 relative">
      <ProjectsAnimation />
      <CryptoBasePage />
    </div>
  );
};

export default CryptoBase;
