import React from "react";
import { useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const { cardData } = location.state || {};

  return (
    <section className="main">
      {cardData ? (
        <div className="display-card">
          <div className="banner-location">
            {cardData.pictures.map((picture, index) => (
              <img key={index} src={picture} alt="" />
            ))}
          </div>

          <div className="container-fiche">
            <div className="fiche-sup">
              <div className="fiche-left">
                <h1>{cardData.title}</h1>
                <h2>{cardData.location}</h2>
                <div>{cardData.tags}</div>
              </div>

              <div className="fich-right">
                <div className="name-picture">
                  <div>{cardData.host.name}</div>
                  <img src={cardData.host.picture} alt={cardData.host.name} />
                </div>

                <div className="rate-stars">
                  <div>{cardData.rating}</div>
                </div>
              </div>
            </div>

            <div className="fiche-inf">
              <div className="container-title">
                <h3>Description</h3>
                <p>{cardData.description}</p>
              </div>

              <div className="container-title">
                <h3>Description</h3>
                <p>{cardData.equipments}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </section>
  );
};

export default Card;
