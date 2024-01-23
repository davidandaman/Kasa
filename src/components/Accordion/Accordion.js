import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/accordion.css";

export default function Accordion({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
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
