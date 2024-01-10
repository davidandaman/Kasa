import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
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
          className={classNames("chevron-icon", { active: toggle })}
        />
      </button>

      <div
        className={classNames("accordion-toggle", {
          animated: toggle,
          closing: !toggle,
        })}
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
