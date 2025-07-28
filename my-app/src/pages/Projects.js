
import React, { useState, useRef } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import './Projects.css';

const projects = [
  {
    id: 'project-alpha',
    image: '/mediaImages/photo-1.jpg',
    title: 'Project Alpha',
    description: 'This is a description for Project Alpha. It is a cool project that does amazing things with technology and creativity.'
  },
  {
    id: 'project-beta',
    image: '/mediaImages/photo-2.jpg',
    title: 'Project Beta',
    description: 'Project Beta is all about innovation and teamwork. It solves real-world problems in a unique way.'
  },
  {
    id: 'project-gamma',
    image: '/mediaImages/photo-3.jpg',
    title: 'Project Gamma',
    description: 'Gamma is a research project focused on AI and machine learning. It pushes the boundaries of what is possible.'
  },
  {
    id: 'project-delta',
    image: '/mediaImages/photo-4.jpg',
    title: 'Project Delta',
    description: 'Delta is a design-centric project that brings together art and code for beautiful results.'
  },
  {
    id: 'project-epsilon',
    image: '/mediaImages/photo-5.jpg',
    title: 'Project Epsilon',
    description: 'Epsilon is a mobile app that helps users track their habits and improve productivity.'
  },
  {
    id: 'project-zeta',
    image: '/mediaImages/photo-6.jpg',
    title: 'Project Zeta',
    description: 'Zeta is a web platform for collaborative document editing and sharing.'
  },
  {
    id: 'project-eta',
    image: '/mediaImages/photo-7.jpg',
    title: 'Project Eta',
    description: 'Eta is a game development project focused on immersive storytelling.'
  },
  {
    id: 'project-theta',
    image: '/mediaImages/photo-8.jpg',
    title: 'Project Theta',
    description: 'Theta is a data visualization tool for business analytics.'
  },
  {
    id: 'project-iota',
    image: '/mediaImages/photo-9.jpg',
    title: 'Project Iota',
    description: 'Iota is a social media platform for sharing creative works.'
  },
  {
    id: 'project-kappa',
    image: '/mediaImages/photo-10.jpg',
    title: 'Project Kappa',
    description: 'Kappa is a cloud-based note-taking application.'
  },
  {
    id: 'project-lambda',
    image: '/mediaImages/photo-11.jpg',
    title: 'Project Lambda',
    description: 'Lambda is a machine learning library for rapid prototyping.'
  },
  {
    id: 'project-longform',
    image: '/mediaImages/photo-12.jpg',
    title: 'Project Longform',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.`
  }
];

function Projects() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const descriptionsRef = useRef(null);
  
  const goHome = () => {
    navigate("/");
  };

  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element && descriptionsRef.current) {
      const container = descriptionsRef.current;
      const elementTop = element.offsetTop;
      const containerTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Calculate the scroll position with 30px extra padding
      const scrollPosition = elementTop - 70;
      
      container.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (index, projectId) => {
    setSelected(index);
    scrollToProject(projectId);
  };

  return (
    <div className="projectsPage">
      <div className="homeButton">
        <RiHomeLine style={{width: "4vh", height: "4vh", cursor: "pointer"}} onClick={goHome}/>
      </div>
      <div className="projectsContainer">
        <div className="projectsList">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className={`projectIconBox${selected === idx ? ' selected' : ''}`}
              onClick={() => handleProjectClick(idx, proj.id)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="projectIcon"
                style={{
                  width: selected === idx ? '90px' : '70px',
                  height: selected === idx ? '90px' : '70px',
                  transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                  borderRadius: '16px',
                  border: selected === idx ? '2.5px solid #ff7f5f' : '1.5px solid #ccc',
                  boxShadow: selected === idx ? '0 4px 16px rgba(255,127,95,0.12)' : 'none',
                  background: '#fff',
                  objectFit: 'cover',
                  marginBottom: '8px',
                  cursor: 'pointer',
                }}
              />
              <div className="projectTitle" style={{fontWeight: selected === idx ? 'bold' : 'normal'}}>{proj.title}</div>
            </div>
          ))}
        </div>
        <div className="projectDescriptionPane" ref={descriptionsRef}>
          {projects.map((proj) => (
            <div key={proj.id} id={proj.id} className="projectDescriptionSection">
              <div className="projectDescriptionTitle">{proj.title}</div>
              <div className="projectDescriptionText">{proj.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;