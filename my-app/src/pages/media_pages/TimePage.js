import React, { useState, useEffect, useRef } from 'react';
import "./TimePage.css";

const TimePage = () => {

  const images = ["2024-04-06_no36.jpg", "2025-03-14.jpg", "2023-05-18.JPG", "2023-07-04-1.jpg", "2024-12-30-2.jpg","2024-06-23-2.jpg", "2024-11-unk9.jpg"];


  const text = ["Russellville, AR | 2024","Atlanta, GA | 2025","Mountain View, CA | 2024","Mountain View, CA | 2023","Hue, Vietnam | 2024","Savannah, GA | 2024","Atlanta, GA | 2024"];


  const [loadedCount, setLoadedCount] = useState(0);
  useEffect(() => {
    if (loadedCount < images.length) {
      const timer = setTimeout(() => {
        setLoadedCount(loadedCount + 1);
      }, 0.3); // Adjust delay as needed
      return () => clearTimeout(timer);
    }
  }, [loadedCount]);

  return (
    <div>
      <div className="timeText">
        Through time and space
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"timeimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default TimePage;