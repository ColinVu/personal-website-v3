import React, { useState, useEffect, useRef } from 'react';
import "./LeftMedia.css";

const LeftMedia = () => {
  const images = ["2024-03-20_no45.png","2023-06-14-1.jpg","2024-05-10-1.jpg","2024-04-06_no36.jpg","2023-05-22.jpg","2024-12-30-4.jpg"];

  return (
    <div className="totalSide">
      there's stuff
      <div className="scrolling-container">
        {images.map((image, index) => (
          <div className="imageBox">
            <img key={index} src={"mediaImages/" + image} alt={`Image ${index + 1}`} className="scrolling-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftMedia;