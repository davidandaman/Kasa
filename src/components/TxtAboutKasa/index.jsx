import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

function TxtAboutKasa({ title, describe }) {
  return (
    <div className="title">
      <p>{title}</p>
    </div>
  );
}

TxtAboutKasa.propTypes = {
  title: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
};

TxtAboutKasa.defaultProps = {
  title: "",
  describe: "",
};

export default TxtAboutKasa;
