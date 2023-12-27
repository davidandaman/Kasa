/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <div>404</div>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
