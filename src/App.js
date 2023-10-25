import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CursorContextProvider from "./context/CursorContext";
import Cursor from "./components/Cursor";
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";
import ArtConnection from "./routes/ArtConnection";
import Wonder from "./routes/Wonder";
import CryptoBase from "./routes/CryptoBase";

function App() {
  const location = useLocation();

  return (
    <>
      <CursorContextProvider>
        <Cursor />
        <Navigation />

        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathName}>
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
