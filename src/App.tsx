import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import CursorContextProvider from "./context/CursorContext";
import About from "./routes/About";
import ArtConnection from "./routes/ArtConnection";
import Contact from "./routes/Contact";
import CryptoBase from "./routes/CryptoBase";
import Home from "./routes/Home";
import Wonder from "./routes/Wonder";
import Work from "./routes/Work";

// Main App component
function App() {
  // Get the current location from React Router
  const location = useLocation();

  return (
    <>
      <CursorContextProvider>
        <Cursor />
        <Navigation />

        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/art-connection" element={<ArtConnection />} />
            <Route path="/wonder" element={<Wonder />} />
            <Route path="/crypto-base" element={<CryptoBase />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </>
  );
}

export default App;
