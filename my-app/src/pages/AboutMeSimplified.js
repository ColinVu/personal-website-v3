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
            <div className="simplifiedLineBold">• computer science @ georgia tech</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>media & computer simulation</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>industrial design minor</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>founding engineer @ <a style={{marginLeft: "8px"}} href="https://seraphineglass.com" target="_blank" rel="noopener noreferrer"> seraphine glass</a></div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>duck enthusiast</div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>professional amateur <a style={{marginLeft: "8px"}} href="/media" target="_blank" rel="noopener noreferrer"> photographer</a></div>
            <div className="simplifiedLine" style={{fontSize: "15px"}}>budget travel addict</div>

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
              date="june 2023 -> aug 2023"
              text='i taught <a href="https://www.linkedin.com/company/galileo-learning/" target="_blank" rel="noopener noreferrer">engineering classes</a> to small children it was pretty fun'
            />

            <TimelineElement 
              date="aug 2023 -> dec 2024"
              text="climate innovations research group @ georgia tech research institute. worked on a project using satellite data analysis models to monitor cropland conditions in ukraine. also worked on a project identifying weighted vehicle miles (VMT) in atlanta"
            />

            <TimelineElement 
              date="may 2024 -> aug 2024"
              text='software engineering intern @ <a href="https://www.linkedin.com/company/american-gaming-systems" target="_blank" rel="noopener noreferrer">american gaming systems</a>, built an internal tool to allow users to dynamically and iteratively create low/no code slot machine games ready to ship to casinos'
            />

            <TimelineElement 
              date="april 2025 -> aug 2025"
              text='founding engineer @ <a href="https://www.seraphineglass.com/" target="_blank" rel="noopener noreferrer">seraphine glass</a>, built augmented reality glasses with a seamlessly integrated remembrance agent / lifestyle manager. raised $155k in pre-seed'
            />

            <TimelineElement 
              date="jan 2024 -> present"
              text='programmatically compiling datasets to help researchers identify socioeconomic outliers in geospatial data with the <a href="https://friendlycities.gatech.edu/" target="_blank" rel="noopener noreferrer">friendly cities research lab</a>'
            />


          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSimplified; 