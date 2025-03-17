import React, { useState, useEffect } from "react";
import "./RightMedia.css";

const RightMedia = () => {
  const images = ["mediaImages/2023-02-unk.jpg", "mediaImages/2024-05-07-24_no11.jpg", "mediaImages/2025-02-unk5.jpg"];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange();
    }, 5000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleImageChange = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setFade(true);
    }, 500); // Transition duration
  };

  const handleTemp = () => {
    
  }

  return (
    <div className="image-container" onClick={handleTemp}>
      <img
        src={images[currentImage]}
        alt="Rotating Display"
        className={`image ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
};

export default RightMedia;
