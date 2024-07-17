import './App.css';
import { iconMap } from "./assets";
import React, { useState, useEffect } from 'react';
import TypeWriterText from "./TypeWriterText.js";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";

function App() {
  const aboutMeText = "A brief overview of myself and my works! Links, interests, accomplishments, and more!";
  const projectsText = "Overview and analysis of each of my projects. Includes diagrams, demos, and repos.";
  const mediaText = "A portfolio of creative works I’ve created. Photos, videos, and more.";
  const resumeText = "Click here to view my resume!";
  const defaultText = "Welcome to my portfolio! Click on an icon to start.";
  const [infoText, setInfoText] = useState(defaultText);
  const [infoTitle, setInfoTitle] = useState("Hi! I'm Colin.");
  const [circleStyle, setCircleStyle] = useState({});
  const [animationActive, setAnimationActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fly, setFly] = useState(false);

  const [currIcon, setCurrIcon] = useState("");

  const handleImageHover = (event) => {
    const name = event.target.getAttribute('data-name');
    if (name === "diary") {
      setInfoTitle("About Me");
      setInfoText(aboutMeText);
    } else if (name === "wrench") {
      setInfoTitle("Projects");
      setInfoText(projectsText);
    } else if (name === "camera") {
      setInfoTitle("Media");
      setInfoText(mediaText);
    } else if (name === "scroll") {
      setInfoTitle("Resume");
      setInfoText(resumeText);
    } else {
      setInfoTitle("Hi! I'm Colin.");
      setInfoText(defaultText);
    }
  }

  const handleImageHoverStop = () => {
    setInfoTitle("Hi! I'm Colin.");
    setInfoText(defaultText);
  }

  const handleClick = async (event) => {
    setSelectedImage(event.target.src);
    setCurrIcon(event.target.getAttribute('data-name'));
    const imgRect = event.target.getBoundingClientRect();
    const centerX = imgRect.left + (imgRect.width / 2);
    const centerY = imgRect.top + (imgRect.height / 2);
    setCircleStyle({
        top: centerY,
        left: centerX,
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
      });

    await setAnimationActive(true);
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  }

  const viewHighlights = () => {
    const totalScrollDistance = window.innerHeight * 1.1;
  
    const scrollingSpeed = 0.5;
  
    const scrollDuration = totalScrollDistance / scrollingSpeed;

    window.scrollBy({
      top: totalScrollDistance,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(function() {
      window.scrollBy({
        top: -window.innerHeight * 0.1,
        left: 0,
        behavior: 'smooth'
      });
    }, scrollDuration * 0.3);
  }

  const flying = () => {
    setFly(true);
    setTimeout(() => {
      setFly(false);
    }, 2000);
  }
  
  useEffect(() => {
    if (animationActive) {
      const timer = setTimeout(() => {
        setAnimationActive(false);
        if (currIcon == "scroll") {
          downloadResume();
        }
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [animationActive]);

  return (
    <div>
      <div className={`mainPage ${fly ? 'flyAway' : ''}`}>
        <div className="homePageRows">
          <div className="homePageRow1">
            <div className="infoBubble">
              <div className="infoTitle">
                {infoTitle}
              </div>
              <div className="infoBody">
                <TypeWriterText text={infoText} speed={10} />
              </div>
            </div>
          </div>
          <div className="homePageRow2">
            <img data-name="diary" src={iconMap.get('diary')} alt="About Me" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
            <img data-name="wrench" src={iconMap.get('wrench')} alt="Projects" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
            <img data-name="camera" src={iconMap.get('camera')} alt="Media" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
          </div>
          <div className="homePageRow3">
            <img data-name="scroll" src={iconMap.get('scroll')} alt="Resume" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
          </div>
          <div className="homePageRow4" onClick={viewHighlights}>
            <div>
              Or view the highlights here!
            </div>
            <div className="upsideDown">
              ^
            </div>
          </div>
        </div>
      </div>
      <div className={`highlights1 ${fly ? 'flyAway' : ''}`}>
        <div className="mePhotoBox">
          <img className="mePhoto" data-name="photo" src={iconMap.get('mePhoto')} alt="Photo of me" width="420px" height="550px"></img>
        </div>
        <div className="bigText">
          <div className="bigTextLine1">
            I'm Colin.
          </div>
          <div className="bigTextLine2">
            I'm a...
          </div>
        </div>
        <div className="descOverlay">
          <div className="descColumn">
            <div className="descItem descItem1">
              <div>I'm an undergrad Computer</div>
              <div>Science major at Georgia Tech.</div>
            </div>
            <div className="descItem descItem2">
              <div>I'm a photographer.</div>
            </div>
            <div className="descItem descItem3">
              <div>I'm a designer and</div>
              <div>a visual artist.</div>
            </div>
          </div>
          <div className="descColumn">
            <div className="descItem descItem4">
              <div>I'm a full-stack software</div>
              <div>developer.</div>
            </div>
            <div className="descItem descItem5">
              <div>I'm a researcher at the</div>
              <div>Georgia Tech Research</div>
              <div>Institute.</div>
            </div>
            <div className="descItem descItem6">
              <div>I'm a geography nerd.</div>
            </div>
          </div>
        </div>
        <div className="highlightOverlay">
          <div className="centerArrow">
            <div className="downArrow">
              <div className="upsideDown">
                ^
              </div>
            </div>
          </div>
          <div className="highlightIcons">
            <FiLinkedin size={80}/>
            <FiGithub size={80}/>
            <div className="emailText" style={{textDecoration: 'underline'}}>
              colinhvu@gmail.com
            </div>
          </div>
        </div>
      </div>
      {animationActive && (
        <div className="overlay">
          <div className="circle" style={circleStyle}></div>
        </div>
      )}
      <div className="homeButton">
        <RiHomeLine size={60}/>
      </div>
    </div>
  );
}

export default App;