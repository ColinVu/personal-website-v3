import React, { useState, useEffect } from 'react';
import { RiHomeLine, RiCloseLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

export const projects = [
  {
    id: 'symbiotic-ai',
    image: '/projectImages/questionmark.jpg',
    title: 'Symbiotic AI',
    minititle: 'SymbAI',
    date: 'August 2025 - Present',
    links: [
    ],
    description: `
      In progress...
      <br>
      <ul>
        <li>Segmenting egocentric video using HTK (Hidden Markov Model Toolkit) based on Mediapipe features and DINOv2 embeddings</li>
        <li>Classifying objects from segmented videos with weak supervision by embedding frames with CLIP and sorting segments using simulated annealing</li>
      </ul>
    `,
    images: [
    ],
  },
  {
    id: 'factxis',
    image: '/projectImages/questionmark.jpg',
    title: 'Factxis: Percentile-Based Visualization',
    minititle: 'Factxis',
    date: 'August 2025 - Present',
    links: [
      { name: 'Link', url: 'https://colinvu.github.io/percentile-based-viz/' }
    ],
    description: `
      In progress...
      <br>
      <ul>
        <li>Developing a tool for visualizing datasets, focused on percentiles</li>
        <li>Integration with maps, custom datasets, filtering, etc.</li>
        <li>Conducted a IRB study to validate the tool's effectiveness</li>
      </ul>
    `,
    images: [
      '/projectImages/factxisui.png',
    ],
  },
  {
    id: 'the-kick-is-good',
    image: '/projectImages/kickfootball.jpg',
    title: 'The Kick is Good',
    minititle: 'The Kick is Good',
    date: 'August 2025 (🏆 HackGT12 Winner 🏆)',
    links: [
      { name: 'Devpost', url: 'https://devpost.com/software/the-kick-is-good' },
      { name: 'GitHub', url: 'https://github.com/ColinVu/FGtracking' },
      { name: 'Video', url: 'https://youtu.be/Ugg36PxM_qI' },
    ],
    description: `
      Built a program to track a football during broadcast footage of field goal to find the exact height and distance throughout its trajectory.
      <br>
      <ul>
        <li>Used <strong>CSRT</strong> to smartly interpolate object positioning</li>
        <li>Added <strong>Kalman filtering</strong> as well to smooth the motion for accuracy</li>
        <li>Developed a <strong>homography</strong> algorithm to extrapolate 3D coordinates from 2D footage</li>
        <li>Auto-detects thousands of features and uses them to adjust for changes in camera zoom</li>
      </ul>
    `,
    images: [
      '/projectImages/kickvid.gif',
    ],
  },
  {
    id: 'big-daddy',
    image: '/projectImages/bigdaddy.png',
    title: 'Big Daddy: AI-Powered Parental Controls',
    minititle: 'Big Daddy',
    date: 'June 2025 (UC Berkeley AI Hackathon)',
    links: [
      { name: 'Devpost', url: 'https://devpost.com/software/big-daddy' },
      { name: 'GitHub', url: 'https://github.com/whackamadoodle3000/Big-Daddy' },
      { name: 'Video', url: 'https://youtu.be/06fpzJV7ULc' },
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
    ],
  },
  {
    id: 'county-buddy',
    image: '/projectImages/countybuddylogo.png',
    title: 'County Buddy: Companion Data for Socioeconomic Data Analysis',
    minititle: 'County Buddy',
    date: 'Jan. 2025 - July 2025',
    links: [
      { name: 'Paper', url: ' https://doi.org/10.7910/DVN/V7LNJK' },
      { name: 'GitHub', url: 'https://github.com/ColinVu/CountyBuddy' },
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
      '/projectImages/countybuddyscatter.png',
    ],
  },
  {
    id: 'nba-outcome-modeling',
    image: '/projectImages/nba.jpg',
    title: 'NBA Outcome Modeling',
    minititle: 'NBA Outcome Modeling',
    date: 'March 2025 - April 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/katamyra/NBA-Outcome-Modeling' },
      { name: 'PDF', url: '/NBAOutcomeModeling.pdf' },
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
      '/projectImages/nbachart.png',
    ],
  },
  {
    id: 'vmt-tracker',
    image: '/projectImages/vmt.jpg',
    title: 'Tracking Georeferenced Changes in VMT and GHG Emissions in the Atlanta Metro Area',
    minititle: 'VMT Tracker',
    date: 'Jan. 2024 - May 2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/vmt-cross-reference' },
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
    images: [],
  },
  {
    id: 'fake-news-detection-model',
    image: '/projectImages/fakenews.png',
    title: 'Fake News Detection Model',
    minititle: 'Fake News Detection Model',
    date: 'June 2023 - July 2023',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/fake-news-detection-model' },
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
    images: [],
  },
  {
    id: 'vuzix-dev-platform',
    image: '/projectImages/vuzix.jpg',
    title: 'Vuzix Development Platform',
    minititle: 'Vuzix Development Platform',
    date: 'July 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/vuzixdisplayplatform' },
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
      '/projectImages/vuzixjob.jpg',
    ],
  },
  {
    id: 'prithvi',
    image: '/projectImages/prithvi.jpg',
    title: 'Monitoring Effects of Climate & Environmental Change on Agriculture and Food Security Using Geospatial Intelligence',
    minititle: 'GeoAI Research',
    date: 'August 2023 - December 2023',
    links: [
      { name: 'PDF', url: '/geo_ai_technologies.docx.pdf' },
    ],
    description: `
      Researched and analyzed how NASA/IBM’s Prithvi model could be used to model land use outcomes in Ukraine post-war.
      <br>
      <ul>
        <li>Built professional visualizations with <strong>Figma</strong> and <strong>ArcGIS</strong> to present to Georgia Tech Research Institute researchers</li>
        <li>Received an official <strong>Request of Information</strong> from the Federal Register to document the work for public policy surrounding post-war redevelopment</li>
      </ul>
    `,
    images: [],
  },
  {
    id: 'crossing-toad',
    image: '/projectImages/toad.png',
    title: 'Crossing Toad',
    minititle: 'Crossing Toad',
    date: 'Jan. 2023 - May 2023',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/Crossing-Toad' },
    ],
    description: `
      Led a team to build an Android Crossy Road clone with smart enemy seeking and collision mechanics.
      <br>
      <ul>
        <li>MVC principles, agile project management</li>
        <li>Created architecture and physics engine</li>
      </ul>
    `,
    images: [],
  },
  {
    id: 'lock-in',
    image: '/projectImages/chaewon.png',
    title: 'chaewon tells you to lock in',
    minititle: 'lock in',
    date: 'March 2025',
    links: [
      { name: 'GitHub', url: 'https://github.com/ColinVu/chaewon-tells-you-to-lock-in' },
    ],
    description: `
      i was having trouble not doom scrolling on instagram reels and i saw a reel of chaewon telling me to lock in so overnight i coded an android app that gives you a pop-up of the video when you're scrolling for too long at a time
      <br>
      <ul>
        <li>based on android screen time lol</li>
        <li>uses a sliding window to gauge productivity</li>
      </ul>
    `,
    images: [],
  },
  {
    id: 'snowman-armageddon',
    image: '/projectImages/snowmen.png',
    title: 'Snowman Armageddon',
    minititle: 'Snowman Armageddon',
    date: 'April 2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/huangkatherine7/graphics-final-project' },
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
      '/projectImages/snowmen.png',
    ],
  },
];

function Projects() {
  const navigate = useNavigate();
  const [expandedImage, setExpandedImage] = useState(null);

  const goHome = () => {
    navigate('/');
  };

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && expandedImage) {
        closeExpandedImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [expandedImage]);

  useEffect(() => {
    document.body.classList.add('projectsBody');
    return () => document.body.classList.remove('projectsBody');
  }, []);

  return (
    <div className="projectsPage">
      <header className="projectsTopBar">
        <button type="button" className="projectsHomeButton" onClick={goHome} aria-label="Go home">
          <RiHomeLine />
        </button>
      </header>

      <section className="projectsHero" aria-label="Projects">
        <h1 className="projectsHeroTitle">Projects and Research</h1>
      </section>

      <main className="projectsContent">
        <div className="projectsContentInner">
          <div className="projectsList">
          {projects.map((proj) => (
            <article key={proj.id} id={proj.id} className="timelineCard">
              <div className="timelineCardHeader">
                <img
                  src={proj.image}
                  alt={proj.minititle}
                  className="timelineCardThumb"
                />
                <div className="timelineCardMeta">
                  <h2 className="timelineCardTitle">{proj.title}</h2>
                  <p className="timelineCardDate">{proj.date}</p>
                  <div className="timelineCardLinks">
                    {proj.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timelineCardLink"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="timelineCardDescription"
                dangerouslySetInnerHTML={{ __html: proj.description }}
              />

              {proj.images && proj.images.length > 0 && (
                <div className="timelineCardImages">
                  {proj.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${proj.title} - Image ${index + 1}`}
                      className="timelineCardImage"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
          </div>
        </div>
      </main>

      {expandedImage && (
        <div className="imageModal" onClick={closeExpandedImage}>
          <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="imageModalClose" onClick={closeExpandedImage} aria-label="Close image">
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
