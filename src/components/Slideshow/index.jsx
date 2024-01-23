import React, { useState } from "react";
import "../../styles/slideshow.css";

const Caroussel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="caroussel-container" style={{ position: "relative" }}>
      {pictures.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={handlePrev}>
            &#8249;
          </button>
          <span className="slide-number">{`${currentIndex + 1}/${
            pictures.length
          }`}</span>
          <button className="carousel-button next" onClick={handleNext}>
            &#8250;
          </button>
        </>
      )}

      <div className="slide">
        <img
          className="slide-image"
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default Caroussel;
