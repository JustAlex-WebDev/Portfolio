import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CursorContextProvider from "./context/CursorContext";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";

function App() {
  const location = useLocation();

  return (
    <>
      <CursorContextProvider>
        <Cursor />
        {/* <Navigation /> */}
        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathName}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </>
  );
}

export default App;
