import React from "react";
import AboutSection from "../components/HomePage/AboutSection";
import ContactSection from "../components/HomePage/ContactSection";
import LandingPage from "../components/HomePage/LandingPage";
import SelectedProjects from "../components/HomePage/SelectedProjects";

const Home = () => {
  return (
    <>
      <LandingPage />
      <SelectedProjects />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
