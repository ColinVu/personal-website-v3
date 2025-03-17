import './Media.css';
import React, { useState, useEffect, useRef } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import RightMedia from './RightMedia.js';
import LeftMedia from './LeftMedia.js';
import MediaManager from './media_pages/MediaManager.js';

function Media() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  }
  const cursorRef = useRef(null);
  const [mediaNum, setMediaNum] = useState(0);
  useEffect(() => {
    const cursorText = cursorRef.current;
    if (!cursorText) return; // Ensure cursorText is not null

    const handleMouseMove = (event) => {
      cursorText.style.left = `${event.clientX + 10}px`; // Offset for better visibility
      cursorText.style.top = `${event.clientY + 10}px`;
      cursorText.style.opacity = "1"; // Ensure it's visible
    };

    const handleMouseLeave = () => {
      cursorText.style.opacity = "0"; // Hide when mouse leaves screen
    };

    const handleMouseEnter = () => {
      cursorText.style.opacity = "1"; // Show again when re-entering
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);


    const handleClick = () => {
      setMediaNum((prev) => (prev + 1) % 6); // Increment mediaNum
    };

    window.addEventListener("click", handleClick);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("click", handleClick);
    };
  }, []); // Run once after component mounts

  return (
    <div className="mediaPage">
      <div className="upperText">
        Some of my pictures...
      </div>
      <MediaManager num={mediaNum}/>
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      <div ref={cursorRef} id="cursorText" className="cursorText">Click for the next page...</div>
    </div>
  );
}

export default Media;