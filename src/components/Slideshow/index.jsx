import React, { useState } from "react";
import "../../styles/caroussel.css";
import { Slide } from "react-slideshow-image";

const Caroussel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const isSingleImage = pictures.length === 1;

  const handleSlide = (previousIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };

  const handleInit = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="caroussel-container">
      <Slide
        onChange={handleSlide}
        onInit={handleInit}
        transitionDuration={isSingleImage ? 0 : 1000}
        indicators={false}
        arrows={!isSingleImage}
      >
        {pictures.map((picture, index) => (
          <div className="each-slide-effect" key={index}>
            <img
              className="slide-image"
              src={picture}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slide>
      {pictures.length > 1 && (
        <span className="slide-number">{`${currentIndex + 1}/${
          pictures.length
        }`}</span>
      )}
    </div>
  );
};

export default Caroussel;
