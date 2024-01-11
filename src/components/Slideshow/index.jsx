import React, { useState, useEffect } from "react";
import "../../styles/slideshow.css";
import { Slide } from "react-slideshow-image";

const buttonStyle = {
  background: "none",
  border: "0px",
};

const Caroussel = ({ pictures }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSlide = (previousIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };

  const handleInit = () => {
    setCurrentIndex(0);
  };

  const responsiveButtonStyle = {
    ...buttonStyle,
    width: isMobile ? "30px" : "70px",
  };

  const svgStyle = {
    width: "100%",
    height: "100%",
    fill: "#fff",
    opacity: "0.9",
  };

  const properties = {
    prevArrow: (
      <button style={responsiveButtonStyle}>
        <svg viewBox="0 0 24 24" style={svgStyle}>
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={responsiveButtonStyle}>
        <svg viewBox="0 0 24 24" style={svgStyle}>
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
      </button>
    ),
  };

  return (
    <div className="caroussel-container">
      <Slide
        {...properties}
        onChange={handleSlide}
        onInit={handleInit}
        transitionDuration={pictures.length === 1 ? 0 : 1000}
        indicators={false}
        arrows={pictures.length !== 1}
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
