import React from 'react';
import './TimelineElement.css';

const TimelineElement = ({ date, text }) => {
  return (
    <div className="timelineElementContainer">
      <div className="timelineElementDate">
        {date}
      </div>
      <div className="timelineElementText">
        {text}
      </div>
    </div>
  );
};

export default TimelineElement; 