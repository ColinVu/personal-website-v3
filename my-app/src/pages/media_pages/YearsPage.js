import React, { useState, useEffect, useRef } from 'react';
import "./YearsPage.css";

const YearsPage = () => {

  const images = ["2023-05-22.jpg", "2024-07-28_no42.jpg", "2023-02-unk.jpg", "2023-10-10.jpg", "2024-11-unk8.jpg","2024-05-10-1.jpg"];


  const text = ["Mountain View, CA | 2023", "Roan Highlands, NC | 2024", "Atlanta, GA | 2023", "Atlanta, GA | 2024", "Atlanta, GA | 2024", "Santa Barbara, CA | 2024"];


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
      <div className="yearText">
        Across the years
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"yearimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default YearsPage;