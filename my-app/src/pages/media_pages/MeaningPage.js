import React, { useState, useEffect, useRef } from 'react';
import "./MeaningPage.css";

const MeaningPage = () => {

  const images = ["2024-11-unk5.jpg", "2024-05-07-24_no11.jpg", "2024-06-23-1.jpg", "2023-06-14-1.jpg", "2023-12-02.jpg","2024-03-20_no29.jpg", "2023-06-14-2.jpg", "2024-07-28_no52.jpg", "2024-12-30-8.jpg"];


  const text = ["Atlanta, GA | 2024","Los Altos, CA | 2024","Savannah, GA | 2024","Los Angeles, CA | 2023","Atlanta, GA | 2024","New York, NY | 2024","Santa Barbara, CA | 2023","Roan Highlands, NC | 2024", "Sai Gon, Vietnam | 2024"];


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
      <div className="meaningText">
        Finding meaning
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"meaningimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default MeaningPage;