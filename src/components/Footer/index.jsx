import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Link to="/">
          <img src={logo} alt="logo Kasa" />
        </Link>
        <p>© 2023 Kasa. All rights reserved</p>
      </div>
    );
  }
}
