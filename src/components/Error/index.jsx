/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default Error;
