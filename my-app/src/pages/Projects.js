
import React, { useState, useEffect, useRef } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Construction from "./Construction.js";

function Projects() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  }
  return (
    <div>
      <Construction/>
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
    </div>
  );
}

export default Projects;