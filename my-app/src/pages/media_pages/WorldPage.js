import React, { useState, useEffect, useRef } from 'react';
import "./WorldPage.css";

const WorldPage = () => {

  const images = ["2023-03-20.jpg", "2024-12-30-9.jpg", "2024-07-28_no37.jpg", "2024-12-30-5.jpg", "2024-10-14_no1.jpg","2024-05-10-1.jpg", "2024-08-26_no37.jpg"];


  const text = ["San Francisco, CA | 2023","Ha Long Bay, Vietnam | 2024","Roan Highlands, NC | 2024","Sai Gon, Vietnam | 2024","New River Gorge, WV | 2024","Santa Barbara, CA | 2024","Dublin, Ireland | 2024"];


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
      <div className="worldText">
        Around the world
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"worldimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default WorldPage;