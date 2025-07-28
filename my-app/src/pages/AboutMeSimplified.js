import React, { useState, useEffect, useRef } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { iconMap } from "../assets";
import './AboutMeSimplified.css';
import TimelineElement from './TimelineElement';
import SimplifiedPhoto from './SimplifiedPhoto';

function AboutMeSimplified() {
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate("/");
  }

  return (
    <div className="aboutMeSimplifiedPage">
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      
      <div className="simplifiedContent">
        <div className="simplifiedLeftBox">
          <SimplifiedPhoto className="simplifiedPhoto"/>
          
          <div className="simplifiedLines">
            <div className="simplifiedLineBold" style={{fontSize: "30px"}}>Colin Vu</div>
            <div className="simplifiedLineBold">• cs @ georgia tech</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>media & computer simulation</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>industrial design minor</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>duck enthusiast</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>professional amateur photographer</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>founding engineer @ <a style={{marginLeft: "8px"}} href="https://seraphineglass.com" target="_blank" rel="noopener noreferrer"> seraphine glass</a></div>

            <div className="simplifiedLineBold" style={{fontSize: "15px"}}>Java • Python • JavaScript • TypeScript • C++ • C# • C • HTML • CSS • MySQL • Swift</div>
            <div className="simplifiedLineBold" style={{fontSize: "15px"}}>React • Node • LangChain • PyTorch • Pandas • NumPy • OpenCV • Whisper • Pixi • Scikit-Learn • Junit • TailwindCSS</div>
            <div className="simplifiedLineBold" style={{fontSize: "15px"}}>Git • AWS EC2 & S3 • Docker • Cursor • Jupyter Notebook • Jira/Confluence • Figma • Tableau • SVN • ArcGIS • Unity • Blender • Android Studio • XCode</div>
          </div>
        </div>
        
        <div className="simplifiedRightBox">
          <div className="simplifiedTimeline">
            <TimelineElement 
              date="june 2004"
              text="i became"
            />

            <TimelineElement 
              date="aug 2022"
              text="arrived at georgia tech"
            />
            
            <TimelineElement 
              date="aug 2023 -> dec 2024"
              text="vip research"
            />

            <TimelineElement 
              date="may 2024 -> aug 2024"
              text="intern"
            />

            <TimelineElement 
              date="march 2024 -> may 2024"
              text="research at friendly cities"
            />

            <TimelineElement 
              date="april 2024 -> present"
              text="founding engineer @ seraphine glass"
            />


          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSimplified; 