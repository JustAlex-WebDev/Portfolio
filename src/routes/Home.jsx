import React from "react";
import AboutSection from "../components/HomePage/AboutSection";
import ContactSection from "../components/HomePage/ContactSection";
import LandingPage from "../components/HomePage/LandingPage";
import SelectedProjects from "../components/HomePage/SelectedProjects";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <LandingPage />
      <SelectedProjects />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
