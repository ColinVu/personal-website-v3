import React, { useState, useEffect, useRef } from 'react';
import "./PeoplePage.css";

const PeoplePage = () => {

  const images = ["2023-04-01.jpg", "2024-11-unk10.jpg", "2023-07-23.jpg", "2024-12-30-4.jpg", "2024-03-20_no45.png","2024-11-unk3.jpg", "2024-08-26_no05.jpg", "2023-07-04-2.jpg"];


  const text = ["Atlanta, GA | 2023","Atlanta, GA | 2024","Santa Cruz, CA | 2023","Hoi An, Vietnam | 2024","New York, NY | 2024","Atlanta, GA | 2024","Howth, Ireland | 2024","Mountain View, CA | 2023"];


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
      <div className="peopleText">
        Finding people
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"peopleimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;