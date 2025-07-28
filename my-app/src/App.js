import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import AboutMeSimplified from "./pages/AboutMeSimplified";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* {<Route path="/aboutme" element={<AboutMe/>} />} */}
        <Route path="/aboutme" element={<AboutMeSimplified/>} />
      </Routes>
    </Router>
  );
}

export default App;