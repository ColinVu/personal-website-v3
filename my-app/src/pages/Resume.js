import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import './Resume.css';

function Resume() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="resumePage">
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      <iframe
        className="resumeViewer"
        src="/resume.pdf"
        title="Resume"
      />
    </div>
  );
}

export default Resume;
