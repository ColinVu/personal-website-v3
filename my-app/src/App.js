import './App.css';
import { iconMap } from "./assets";
import React, { useState, useEffect, useRef } from 'react';
import TypeWriterText from "./TypeWriterText.js";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import { FiClipboard, FiCheck } from 'react-icons/fi';
import Timeline from "./Timeline.js";

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
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isCopied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currIcon, setCurrIcon] = useState("");
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef(null);
  const highlightsP1 = useRef(null);
  const highlightsP2 = useRef(null);
  const highlightsP3 = useRef(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    scrollTop();

    const handleScroll = () => {
      const overlayPosition = window.innerHeight * 0.8;
      const timelinePosition = window.innerHeight * 1.6;
      if (window.scrollY >= overlayPosition) {
        setOverlayVisible(true);
      } else {
        setOverlayVisible(false);
      }
      if (window.scrollY >= timelinePosition) {
        setTimelineVisible(true);
      } else {
        setTimelineVisible(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateTimelineWidth = () => {
      if (timelineRef.current) {
        setTimelineWidth(timelineRef.current.offsetWidth);
      }
    };
  
    updateTimelineWidth();
  
    window.addEventListener('resize', updateTimelineWidth);
  
    return () => {
      window.removeEventListener('resize', updateTimelineWidth);
    };
  }, [timelineVisible]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

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

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  }

  const openGitHub = () => {
    window.open('https://github.com/ColinVu', '_blank');
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/colin-vu/', '_blank');
  }

  const viewHighlights = () => {
    if (highlightsP1.current) {
      highlightsP1.current.scrollIntoView({behavior: "smooth"});
    }
  }

  const viewHighlightsPage2 = () => {
    if (highlightsP2.current) {
      highlightsP2.current.scrollIntoView({behavior: "smooth"});
    }
  }

  const viewHighlightsPage3 = () => {
    if (highlightsP3.current) {
      highlightsP3.current.scrollIntoView({behavior: "smooth"});
    }
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Indicate the text was copied
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  }

  return (
    <div style={{overflowY: "hidden"}}>
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
            <div className="pageIcon">
              <img data-name="diary" src={iconMap.get('diary')} alt="About Me" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
              About Me
            </div>
            <div className="pageIcon">
              <img data-name="wrench" src={iconMap.get('wrench')} alt="Projects" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
              Projects
            </div>
            <div className="pageIcon">
              <img data-name="camera" src={iconMap.get('camera')} alt="Media" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
              Media
            </div>
          </div>
          <div className="homePageRow3">
            <div className="pageIcon">
              <img data-name="scroll" src={iconMap.get('scroll')} alt="Resume" onMouseEnter={handleImageHover} onMouseLeave={handleImageHoverStop} onClick={handleClick} />
              Resume
            </div>
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
      <div ref={highlightsP1} className={`highlights1 ${fly ? 'flyAway' : ''}`}>
        <div className="mePhotoBox">
          <img className="mePhoto" data-name="photo" src={iconMap.get('mePhoto')} alt="Photo of me"></img>
        </div>
        <div className="descOverlay">
          <div className="bigText">
            <div className="bigTextLine1">
              I'm Colin.
            </div>
            <div className="bigTextLine2">
              I'm a...
            </div>
          </div>
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
            <img className="descItem7" data-name="duck-laptop" src={iconMap.get('duckLaptop')} alt="duck with laptop icon"/>
          </div>
        </div>
        <div className="centerArrow">
          <div className="downArrow">
            <div className="upsideDown" onClick={viewHighlightsPage2}>
              ^
            </div>
          </div>
        </div>
      </div>
      <div ref={highlightsP2} className={`highlights2 ${fly ? 'flyAway' : ''}`}>
        <div className="highlights2TopBox">
          <div className="highlights2TopLeft">
            <div>My life</div>
            <div>in experience</div>
          </div>
          <div className="highlights2TopRight">
            <div>
              Java . Python . JavaScript . TypeScript
            </div>
            <div>
              C++ . C . C# . HTML . CSS . MySQL
            </div>
            <div>
              Assembly . PHP . Android XML . Bash
            </div>
          </div>
        </div>
        <div className="timelineBox">
          <div className={`timeline ${timelineVisible ? 'visible' : ''}`} ref={timelineRef}>
            <Timeline className="tlcomp"/>
          </div>
        </div>
        {/* {(timelineWidth < 1100) && (
          <div className="rightArrow" >
            <div className="right">
              ^
            </div>
          </div>
        )} */}
        <div className="centerArrow2">
          <div className="downArrow">
            <div className="upsideDown" onClick={viewHighlightsPage3}>
              ^
            </div>
          </div>
        </div>
      </div>
      <div ref={highlightsP3} className={`highlights3 ${fly ? 'flyAway' : ''}`}>
        
      </div>
        <div className={`highlightOverlay ${overlayVisible ? 'visible' : ''}`}>
          <div className="highlightIcons">
            <FiLinkedin style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={openLinkedIn}/>
            <FiGithub style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={openGitHub}/>
            <div
              className="emailText icon-hover"
              style={{ textDecoration: 'underline' }}
              onClick={() => copyToClipboard('colinhvu@gmail.com')}
            >
              colinhvu@gmail.com
              <div className="cursor-icon" style={{ top: mousePosition.y - 15, left: mousePosition.x + 15 }}>
                {isCopied ? <FiCheck /> : <FiClipboard />}
                {isCopied && (
                  <div className="copied" style={{ top: mousePosition.y - 15, left: mousePosition.x + 32 }}>
                    Copied
                  </div>
                )}
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
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={scrollTop}/>
      </div>
    </div>
  );
}

export default App;