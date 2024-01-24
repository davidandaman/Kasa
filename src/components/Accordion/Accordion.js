import React, { useState } from "react";
import chevronUpImage from "../../assets/images/chevron-up.png";
import "../Accordion/styles/accordion.scss";

export default function Accordion({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <button
        onClick={toggleState}
        className={`accordion-visible ${toggle ? "animated" : ""}`}
      >
        <span>{title}</span>
        <img
          src={chevronUpImage}
          alt="Chevron Up"
          className={`chevron-icon ${toggle ? "active" : ""}`}
        />
      </button>

      <div
        className={`accordion-toggle ${toggle ? "animated" : ""} ${
          !toggle ? "closing" : ""
        }`}
        style={{
          maxHeight: toggle ? "1000px" : "0",
          opacity: toggle ? "1" : "0",
        }}
      >
        {description}
      </div>
    </div>
  );
}
