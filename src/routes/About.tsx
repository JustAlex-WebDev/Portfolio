import React from "react";
import AboutAnimation from "../components/About Page/AboutAnimation";
import AboutPage from "../components/About Page/AboutPage";

const About: React.FC = () => {
  return (
    <div className="z-30 relative">
      <AboutAnimation />
      <AboutPage />
    </div>
  );
};

export default About;
