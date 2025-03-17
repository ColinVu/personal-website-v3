import './TimelineCSS.css';
import React, { useState, useEffect, useRef } from 'react';
import { iconMap } from "../assets";

const Timeline = ({timelineVisible}) => {
  const begin = "I learned my first language--JavaScript--when I was 8 years old. Across the next 10 years, I learned various languages such as Java, Python, and C#. I learned how to perform packet analysis in Splunk and how to create basic front-end development using PHP.";
  const gtText = "I began my student journey at Georgia Tech as a Computer Science major.";
  const crossToad = "I led a team to create my first app--a 2D scrolling game--using Java and Android Studio. The project used MVC architecture and Agile principles, and I created the sprite physics engine and most UI assets. I led weekly scrum meetings and diagramming sessions.";
  const falseNews = "I developed and refined logistic regression models in NumPy and Pandas to detect the probability of false news within news articles using algorithms that analyzed keywords, tags, and domain name extensions.";
  const vip = "I began working with the Georgia Tech Research Institute to study environmental issues and identify tech-based solutions for them. I identified the change in Vehicles Miles Traveled near any point in the state of Georgia using a weighted algorithm with traffic data access to tens of thousands of points across the state. I also refined a NASA/IBM machine learning model that creates land use forecasts based on satellite data in order to identify optimal development patterns for post-war Ukrianian farmlands.";
  const ags = "I developed accross the full stack on a client-facing codebase as part of a 10+ member Agile team to create a game development platform in JavaScript, TypeScript, React, and PIXI. I maintained and troubleshot the C++ game API, and was heavily involved in organizing the code structure and development through daily in-office standups and meetings.";
  
  const timelinePoint = (length, dist, side, date, title, text, bolded) => {
    return (
      <>
        <div className="dot" style={{ marginLeft: `${length + 65}px` }}>
          .
        </div>
        <div className="line" style={{ marginLeft: `${length + 70.5}px`, marginTop: `${(side === 'up') ? dist : 345}px`, height: `${(side === 'up') ? (345-dist) : (dist - 345)}px`}}>
        </div>
        <div className="bubble" style={{ marginLeft: `${length}px`, marginTop: `${dist}px`}}>
          <div className="date">
            {date}
          </div>
          <div className="title">
            {title}
          </div>
          <div className="text">
            {text}
          </div>
          {
            displayBolded(bolded)
          }
        </div>
      </>
    );
  }

  const largeTimelinePoint = (length, dist, side, date, title, text, bolded) => {
    return (
      <>
        <div className="dot" style={{ marginLeft: `${length + 184}px` }}>
          .
        </div>
        <div className="line" style={{ marginLeft: `${length + 190}px`, marginTop: `${(side === 'up') ? dist : 345}px`, height: `${(side === 'up') ? (345-dist) : (dist - 345)}px`}}>
        </div>
        <div className="largeBubble" style={{ marginLeft: `${length}px`, marginTop: `${dist}px`}}>
          <div className="date">
            {date}
          </div>
          <div className="title">
            {title}
          </div>
          <div className="text">
            {text}
          </div>
          {
            displayBolded(bolded)
          }
        </div>
      </>
    );
  }

  const displayBolded = (bolded) => {
    if (bolded !== "") {
      return (
        <div className="boldedText">
          {bolded}
        </div>
      );
    }
  }

  
  return (
    <div>
      <div className={`fullTimeline ${timelineVisible ? 'visible' : ''}`}>
        <div className="mainLine">
          ________________________________________________
        </div>
        <img className="duckFlying" data-name="duckFlying" src={iconMap.get('duckFlying')} alt="Flying Duck"/>
        {timelinePoint(40, 145, "up", "2012 - 2022", "The Beginning", begin)}
        {timelinePoint(130, 375, "down", "Aug. 2022 - present", "Georgia Tech", gtText, "GPA: 4.0")}
        {timelinePoint(220, 155, "up", "Jan. 2023 - May 2023", "Crossing Toad", crossToad)}
        {timelinePoint(310, 360, "down", "June 2023", "False News ML Model", falseNews, "Final model accuracy: 97%")}
        {largeTimelinePoint(400, 160, "up", "Aug. 2023 - present", "Undergraduate Research", vip, "Acknowledged for research impact with an official ROI (Request of Information) from the Federal Register.")}
        {largeTimelinePoint(490, 367, "down", "May 2024 - Aug. 2024", "Full-Stack Software Engineering Intern", ags)}
      </div>
    </div>
  );
};

export default Timeline;