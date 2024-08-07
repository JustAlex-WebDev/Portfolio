import React from "react";
import HomePage from "../components/Home Page/HomePage";
import HomeAnimation from "../components/Home Page/HomeAnimation";

const Home: React.FC = () => {
  return (
    <div className="z-30 relative">
      <HomeAnimation />
      <HomePage />
    </div>
  );
};

export default Home;
