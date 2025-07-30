
import React, { useState, useRef, useEffect } from 'react';
import { RiHomeLine, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import RetroBackground from './RetroBackground';
import './Projects.css';

const projects = [
//   {
//     id: 'project-alpha',
//     image: '/mediaImages/photo-1.jpg',
//     title: 'Project Alpha',
//     date: 'March 2024',
//     links: [
//       { name: 'Live Demo', url: 'https://project-alpha.demo' },
//       { name: 'GitHub', url: 'https://github.com/user/project-alpha' }
//     ],
//     description: `
//       This is a description for <strong>Project Alpha</strong>. It is a cool project that does amazing things with technology and creativity. 
//       You can now use <em>HTML formatting</em> in descriptions!
      
//       <br>
      
//       Features include:
//       <ul>
//         <li><strong>Bold text</strong> for emphasis</li>
//         <li><em>Italic text</em> for subtle emphasis</li>
//         <li><a href="https://example.com" target="_blank">Clickable links</a></li>
//         <li><code>Inline code</code> for technical terms</li>
//       </ul>
      
//       <br>
      
//       You can also add code blocks:
//       <pre><code>function example() {
//   console.log("Hello World!");
// }</code></pre>
//     `,
//     images: [
//       '/mediaImages/photo-1.jpg',
//       '/mediaImages/photo-2.jpg',
//       '/mediaImages/photo-3.jpg'
//     ]
//   },
  {
    id: 'big-daddy',
    image: '/projectImages/bigdaddy.png',
    title: 'Big Daddy: AI-Powered Parental Controls',
    minititle: 'Big Daddy',
    date: 'June 2025 (UC Berkeley AI Hackathon)',
    links: [
      { name: 'Devpost', url: 'https://devpost.com/software/big-daddy' },
      { name: 'GitHub', url: 'https://github.com/whackamadoodle3000/Big-Daddy' },
      { name: 'Video', url: 'https://youtu.be/06fpzJV7ULc' }
    ],
    description: `
      Built an intelligent browser wrapper that supports students during online learning by integrating real-time emotional and activity analysis.
      <br>
      <ul>
        <li>Used <strong>GPT-4o</strong> to analyze live screen content</li>
        <li>Integrated <strong>DeepFace</strong> for emotion detection via webcam</li>
        <li>Delivered live voice feedback with <strong>LMNT's voice API</strong></li>
        <li>Controlled browsing behavior using context-aware automation</li>
        <li>Generated session reports with <strong>Gemini 2.5 Pro</strong> based on activity logs</li>
      </ul>
    `,
      images: [
      '/projectImages/bigdaddydistraction.png',
      '/projectImages/bigdaddypraise.png',
      '/projectImages/bigdaddyemotion.png',
    ]
  },
  {
    id: 'county-buddy',
    image: '/projectImages/countybuddylogo.png',
    title: 'County Buddy: Companion Data for Socioeconomic Data Analysis',
    minititle: 'County Buddy',
    date: 'Jan. 2025 - July 2025',
    links: [
      { name: 'Paper', url: ' https://doi.org/10.7910/DVN/V7LNJK' },
      { name: 'GitHub', url: 'https://github.com/ColinVu/CountyBuddy' }
    ],
    description: `
      Published a geospatial dataset to support socio-economic research by aggregating and filtering special population data at the U.S. county and census tract levels.
      <br>
      <ul>
        <li>Aggregated and cleaned data from <strong>U.S. Census</strong>, <strong>NCES</strong>, <strong>DOT</strong>, and <strong>DOI</strong></li>
        <li>Applied statistical thresholding for outlier detection</li>
      </ul>
    `,
      images: [
      '/projectImages/countybuddymap.png',
      '/projectImages/countybuddyscatter.png'
    ]
  },
  {
    id: 'nba-outcome-modeling',
    image: '/projectImages/nba.jpg',
    title: 'NBA Outcome Modeling',
    minititle: 'NBA Outcome Modeling',
    date: 'March 2025 - April 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/katamyra/NBA-Outcome-Modeling' },
      { name: 'PDF', url: '/NBAOutcomeModeling.pdf' }
    ],
    description: `
      Built ML models to predict NBA game point totals for Over–Under sports betting, leveraging historical stats and betting data.
      <br>
      <ul>
        <li>Scraped and processed data using <strong>Python</strong>, <strong>Pandas</strong>, and <strong>NumPy</strong></li>
        <li>Built models using <strong>Random Forest</strong>, <strong>Neural Networks (PyTorch)</strong>, <strong>Collaborative Filtering</strong>, and <strong>LSTM</strong></li>
        <li>Engineered features including rolling averages, one-hot encodings, travel distances, and matchup dynamics</li>
        <li>Achieved best performance (MSE = 369.38) with a 5-layer fully connected neural network</li>
      </ul>
    `,
      images: [
      '/projectImages/nbachart.png'
    ]
  },
  {
    id: 'vmt-tracker',
    image: '/projectImages/vmt.jpg',
    title: 'Tracking Georeferenced Changes in VMT and GHG Emissions in the Atlanta Metro Area',
    minititle: 'VMT Tracker',
    date: 'Jan. 2024 - May 2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/vmt-cross-reference' }
    ],
    description: `
      Created a <strong>Geographic Weighted Regression algorithm (GWR)</strong> and visual tool to analyze georeferenced changes in emissions in the Atlanta area.
      <br>
      <ul>
        <li>Developed a <strong>Python</strong> script to automate the data cleaning process</li>
        <li>Created a <strong>SQL</strong> database to store and query the data</li>
        <li>Compiled and visualized <strong>Department of Transportation (DOT)</strong> data</li>
      </ul>
    `,
      images: [
    ]
  },
  {
    id: 'fake-news-detection-model',
    image: '/projectImages/fakenews.png',
    title: 'Fake News Detection Model',
    minititle: 'Fake News Detection Model',
    date: 'June 2023 - July 2023',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/fake-news-detection-model' }
    ],
    description: `
      Developed a language model to find the likelihood of a news article being fake news.
      <br>
      <ul>
        <li>Used <strong>Bag of Words (BoW)</strong> and <strong>GloVe word embeddings</strong></li>
        <li>Used <strong>Logistic Regression</strong> to classify news articles</li>
        <li>Achieved a final model confidence interval of <strong>97%</strong></li>
      </ul>
    `,
      images: [
    ]
  },
  {
    id: 'vuzix-dev-platform',
    image: '/projectImages/vuzix.jpg',
    title: 'Vuzix Development Platform',
    minititle: 'Vuzix Development Platform',
    date: 'July 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/vuzixdisplayplatform' }
    ],
    description: `
      Built a React-based canvas editor using <strong>react-konva</strong> that allows users to create animated visualizations for the Vuzix Z100 AR glasses.
      <br>
      <ul>
        <li>User-friendly dynamic modification of elements, similar to Unity</li>
        <li>Supports images, shapes, text, and animation</li>
      </ul>
    `,
    images: [
      '/projectImages/vuzixdisplay.png',
      '/projectImages/vuzixjob.jpg'
    ]
  },
  {
    id: 'prithvi',
    image: '/projectImages/prithvi.jpg',
    title: 'Monitoring Effects of Climate & Environmental Change on Agriculture and Food Security Using Geospatial Intelligence',
    minititle: 'GeoAI Research',
    date: 'August 2023 - December 2023',
    links: [
      { name: 'PDF', url: '/geo_ai_technologies.docx.pdf' }
    ],
    description: `
      Researched and analyzed how NASA/IBM’s Prithvi model could be used to model land use outcomes in Ukraine post-war.
      <br>
      <ul>
        <li>Built professional visualizations with <strong>Figma</strong> and <strong>ArcGIS</strong> to present to Georgia Tech Research Institute researchers</li>
        <li>Received an official <strong>Request of Information</strong> from the Federal Register to document the work for public policy surrounding post-war redevelopment</li>
      </ul>
    `,
    images: [
    ]
  },
  {
    id: 'crossing-toad',
    image: '/projectImages/toad.png',
    title: 'Crossing Toad',
    minititle: 'Crossing Toad',
    date: 'Jan. 2023 - May 2023',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/Crossing-Toad' }
    ],
    description: `
      Led a team to build an Android Crossy Road clone with smart enemy seeking and collision mechanics.
      <br>
      <ul>
        <li>MVC principles, agile project management</li>
        <li>Created architecture and physics engine</li>
      </ul>
    `,
      images: [
    ]
  },
  {
    id: 'lock-in',
    image: '/projectImages/chaewon.png',
    title: 'chaewon tells you to lock in',
    minititle: 'lock in',
    date: 'March 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/chaewon-tells-you-to-lock-in' }
    ],
    description: `
      i was having trouble not doom scrolling on instagram reels and i saw a reel of chaewon telling me to lock in so overnight i coded an android app that gives you a pop-up of the video when you're scrolling for too long at a time
      <br>
      <ul>
        <li>based on android screen time lol</li>
        <li>uses a sliding window to gauge productivity</li>
      </ul>
    `,
    images: [
    ]
  },
  {
    id: 'snowman-armageddon',
    image: '/projectImages/snowmen.png',
    title: 'Snowman Armageddon',
    minititle: 'Snowman Armageddon',
    date: 'April 2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/huangkatherine7/graphics-final-project' }
    ],
    description: `
    they're coming...
    <br>
      <ul>
        <li>shaded w/ <strong>phong shading</strong>, also had <strong>ray tracing</strong> but it fried my PC</li>
        <li><strong>noise-generated terrain</strong>, skybox for the environment</li>
        <li>snow particles made w/ <strong>alpha blending</strong></li>
        <li>snowmen have physics-based movement and are generated by <strong>L-system</strong></li>
      </ul>
    `,
    images: [
      '/projectImages/snowmen.png'
    ]
  }
];

function Projects() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
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

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  // Handle escape key to close expanded image
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && expandedImage) {
        closeExpandedImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedImage]);

  return (
    <div className="projectsPage">
      <RetroBackground />
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
                alt={proj.minititle}
                className="projectIcon"
                style={{
                  width: selected === idx ? '90px' : '70px',
                  height: selected === idx ? '70px' : '54px',
                  transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                  borderRadius: '4px',
                  border: selected === idx ? '2.5px solid #ffffff' : '1.5px solid #ccc',
                  boxShadow: selected === idx ? '0 4px 16px rgba(255,127,95,0.12)' : 'none',
                  background: '#fff',
                  objectFit: 'cover',
                  marginBottom: '8px',
                  cursor: 'pointer',
                }}
              />
              <div className="projectTitle" style={{fontWeight: selected === idx ? 'bold' : 'normal'}}>{proj.minititle}</div>
            </div>
          ))}
        </div>
        <div className="projectDescriptionPane" ref={descriptionsRef}>
          {projects.map((proj) => (
            <div key={proj.id} id={proj.id} className="projectDescriptionSection">
              <div className="projectDescriptionTopBar">
                <div className="projectDescriptionTopBarLeft">
                  <div className="projectDescriptionTitle">{proj.title}</div>
                  <div className="projectDescriptionDate">{proj.date}</div>
                </div>
                <div className="projectDescriptionTopBarRight">
                  <div className="projectDescriptionLinks">
                    {proj.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectLink"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div 
                className="projectDescriptionText" 
                dangerouslySetInnerHTML={{ __html: proj.description }}
              />
              {proj.images && proj.images.length > 0 && (
                <div className="projectImages">
                  {proj.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${proj.title} - Image ${index + 1}`}
                      className="projectImage"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen image modal */}
      {expandedImage && (
        <div className="imageModal" onClick={closeExpandedImage}>
          <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="imageModalClose" onClick={closeExpandedImage}>
              <RiCloseLine />
            </button>
            <img
              src={expandedImage}
              alt="Expanded view"
              className="expandedImage"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;