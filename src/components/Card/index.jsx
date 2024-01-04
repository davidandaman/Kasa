import React from "react";
import { useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const { cardData } = location.state || {};

  return (
    <div>
      {cardData ? (
        <div>
          <h1>{cardData.title}</h1>
          <h2>{cardData.location}</h2>
          <img src={cardData.cover} alt={cardData.title} />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Card;
