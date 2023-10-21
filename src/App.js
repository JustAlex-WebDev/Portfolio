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
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </>
  );
}

export default App;
