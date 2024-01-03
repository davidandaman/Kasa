import React from "react";
import PropTypes from "prop-types";
import DefaultPicture from "./DefaultPicture";
import "./Card.scss";

function Card({ title, picture }) {
  const isPictureValid = picture && picture.trim() !== "";

  return (
    <div className={`show-card ${isPictureValid ? "" : "no-image"}`}>
      {isPictureValid && <img src={picture} alt={title} />}
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  picture: DefaultPicture,
};

export default Card;
