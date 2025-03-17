import React, { useState, useEffect, useRef } from 'react';
import "./LightPage.css";

const LightPage = () => {

  const images = ["2024-07-28_no46.jpg", "2025-02-unk2.jpg", "2025-02-unk4.jpg", "2024-11-unk1.jpg", "2025-02-unk1.jpg","2025-02-unk3.jpg", "2024-12-30-6.jpg"];


  const text = ["Roan Highlands, NC | 2024","Atlanta, GA | 2025","Milledgeville, GA | 2025","Atlanta, GA | 2024","Atlanta, GA | 2025","Atlanta, GA | 2025","Sai Gon, Vietnam | 2024"];


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
      <div className="lightText">
        Through time and space
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.slice(0, loadedCount).map((src, index) => (
          <img key={index} src={"./mediaImages/" + src} alt={text[index]} className={"lightimg" + (index + 1) + " pics"} />
        ))}
      </div>
    </div>
  );
};

export default LightPage;