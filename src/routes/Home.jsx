import React from "react";
import LandingPage from "../components/HomePage/LandingPage";
import LoadingAnimation from "../components/LoadingAnimation";

const Home = () => {
  return (
    <div className="z-40 relative">
      <LoadingAnimation />
      <LandingPage />
    </div>
  );
};

export default Home;
