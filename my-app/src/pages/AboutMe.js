import React, { useState, useEffect, useRef } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Construction from "./Construction.js";
import { iconMap } from "../assets";
import './AboutMe.css';
import TimelineElement from './TimelineElement';

function AboutMe() {
  const navigate = useNavigate();
  const highlightsP1 = useRef(null);
  const goHome = () => {
    navigate("/");
  }
  return (
    <div className="aboutMePage">
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      <div className="aboutMePage1">
        <div className="leftBox">
          <div ref={highlightsP1} className="aboutHighlights">
            <div className="aboutMePhotoBox">
              <img className="aboutMePhoto" data-name="photo" src={iconMap.get('mePhoto')} alt="Photo of me"></img>
            </div>
            <div className="aboutDescOverlay">
              <div className="aboutBigText">
                <div className="aboutBigTextLine1">
                  I'm Colin.
                </div>
                <div className="aboutBigTextLine2">
                  I'm a...
                </div>
              </div>
              <div className="aboutDescColumn">
                <div className="aboutDescItem aboutDescItem1">
                  <div>I'm an undergrad Computer</div>
                  <div>Science major at Georgia Tech.</div>
                </div>
                <div className="aboutDescItem aboutDescItem2">
                  <div>I'm a photographer.</div>
                </div>
                <div className="aboutDescItem aboutDescItem3">
                  <div>I'm a designer and</div>
                  <div>a visual artist.</div>
                </div>
              </div>
              <div className="aboutDescColumn">
                <div className="aboutDescItem aboutDescItem4">
                  <div>I'm a full-stack software</div>
                  <div>developer.</div>
                </div>
                <div className="aboutDescItem aboutDescItem5">
                  <div>I'm a research assistant</div>
                  <div>in the Friendly</div>
                  <div>Cities Research Lab.</div>
                </div>
                <div className="aboutDescItem aboutDescItem6">
                  <div>I'm a geography nerd.</div>
                </div>
                <img className="aboutDescItem7" data-name="duck-laptop" src={iconMap.get('duckLaptop')} alt="duck with laptop icon"/>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBox">
          <div className="aboutContentPane">
            <div className="aboutContentText">
              <div className="aboutIntro">
                I'm Colin. I'm a Georgia Tech undergrad studying CS and building AR tech. I also love design (industrial design minor!) and geographic data science. 
              </div>
              
              <div className="aboutSkills">
                <div className="skillCategory">
                  Java • Python • JavaScript • TypeScript • C++ • C# • C • HTML • CSS • MySQL • Swift
                </div>

                <div className="skillCategory">
                  React • Node • LangChain • PyTorch • Pandas • NumPy • OpenCV • Whisper • Pixi • Scikit-Learn • Junit • TailwindCSS
                </div>

                <div className="skillCategory">
                  Git • AWS EC2 & S3 • Docker • Cursor • Jupyter Notebook • Jira/Confluence • Figma • Tableau • SVN • ArcGIS • Unity • Blender • Android Studio • XCode
                </div>
                
              </div>
              
              <div className="aboutProject">
              My favorite project: The NBA Outcome Modeling project was an absolute blast to work on! What made it so exciting was combining my love for basketball with machine learning and data science. I got to dive deep into player statistics, game dynamics, and predictive modeling to forecast game outcomes. The thrill of seeing the model accurately predict results, tweaking algorithms to improve accuracy, and discovering unexpected patterns in the data made every late night worth it. Plus, being able to discuss the results with fellow basketball fans and see their reactions to the predictions was incredibly rewarding!
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="aboutMeTimeline">
      <div className="timelineContainer">
        <TimelineElement 
          date="August, 2022 - May, 2026"
          text="Started my journey at Georgia Tech as a Computer Science major with a focus on artificial intelligence and machine learning. During this time, I've maintained a 4.0 GPA while diving deep into algorithms, data structures, and software engineering principles. I've also discovered my passion for geographic data science and industrial design, leading me to pursue a minor in industrial design."
        />
        
        <TimelineElement 
          date="January, 2023 - May, 2023"
          text="Led a dynamic team to develop 'Crossing Toad', my first major mobile application - a 2D scrolling game built using Java and Android Studio. This project was a fantastic introduction to MVC architecture and Agile development principles. I took ownership of creating the sprite physics engine and designing most of the UI assets, while coordinating weekly scrum meetings and technical diagramming sessions."
        />
        
        <TimelineElement 
          date="August, 2023 - Present"
          text="Began working with the Georgia Tech Research Institute on environmental research projects, focusing on tech-based solutions for sustainability challenges. My work involves analyzing Vehicle Miles Traveled data across Georgia using weighted algorithms and traffic data from thousands of monitoring points. I've also contributed to refining a NASA/IBM machine learning model that creates land use forecasts from satellite data to identify optimal development patterns for post-war Ukrainian farmlands."
        />
        
        <TimelineElement 
          date="May, 2024 - August, 2024"
          text="Worked as a Full-Stack Software Engineering Intern on a client-facing codebase as part of a 10+ member Agile development team. Built features across the entire technology stack using JavaScript, TypeScript, React, and PIXI to create an innovative game development platform. I was heavily involved in maintaining and troubleshooting the C++ game API, while contributing to code architecture decisions through daily in-office standups and collaborative planning sessions."
        />
        {/*The Beginning
I learned my first language--JavaScript--when I was 8 years old. Across the next 10 years, I learned various languages such as Java, Python, and C#. I learned how to perform packet analysis in Splunk and how to create basic front-end development using PHP.
.Aug. 2022 - present
Georgia Tech
I began my student journey at Georgia Tech as a Computer Science major.
GPA: 4.0
.Jan. 2023 - May 2023
Crossing Toad
I led a team to create my first app--a 2D scrolling game--using Java and Android Studio. The project used MVC architecture and Agile principles, and I created the sprite physics engine and most UI assets. I led weekly scrum meetings and diagramming sessions.
.June 2023
False News ML Model
I developed and refined logistic regression models in NumPy and Pandas to detect the probability of false news within news articles using algorithms that analyzed keywords, tags, and domain name extensions.
Final model accuracy: 97%
.Aug. 2023 - present
Undergraduate Research
I began working with the Georgia Tech Research Institute to study environmental issues and identify tech-based solutions for them. I identified the change in Vehicles Miles Traveled near any point in the state of Georgia using a weighted algorithm with traffic data access to tens of thousands of points across the state. I also refined a NASA/IBM machine learning model that creates land use forecasts based on satellite data in order to identify optimal development patterns for post-war Ukrianian farmlands.
Acknowledged for research impact with an official ROI (Request of Information) from the Federal Register.
.May 2024 - Aug. 2024
Full-Stack Software Engineering Intern
I developed accross the full stack on a client-facing codebase as part of a 10+ member Agile team to create a game development platform in JavaScript, TypeScript, React, and PIXI. I maintained and troubleshot the C++ game API, and was heavily involved in organizing the code structure and development through daily in-office standups and meetings. */}
      </div>
    </div>
    </div>
  );
}

export default AboutMe;