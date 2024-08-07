import React from "react";
import ContactAnimation from "../components/Contact Page/ContactAnimation";
import ContactPage from "../components/Contact Page/ContactPage";

const Contact: React.FC = () => {
  return (
    <div className="z-30 relative">
      <ContactAnimation />
      <ContactPage />
    </div>
  );
};

export default Contact;
