import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../DatasApi/api";

const Card = () => {
  const location = useLocation();
  const { cardData } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        if (!cardData) {
          const jsonData = await fetchData();
          const idFromUrl = window.location.pathname.split("/").pop();
          location.state = {
            cardData: jsonData.locationsList.find(
              (loc) => loc.id === idFromUrl
            ),
          };
        }

        setLoading(false);
      } catch (error) {
        // Handle errors if necessary
        setLoading(false);
      }
    };

    fetchCardData();
  }, [cardData, location.state]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!cardData) {
    return null;
  }

  const renderStars = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
      const starClass = i < cardData.rating ? "active-star" : "inactive-star";

      stars.push(
        <span key={i} className={`star ${starClass}`}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    }

    return stars;
  };

  return (
    <section className="main">
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

              <div className="tags">
                <ul>
                  {cardData.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="fiche-right">
              <div className="name-picture">
                <p>{cardData.host.name}</p>
                <div className="profile-picture">
                  <img src={cardData.host.picture} alt={cardData.host.name} />
                </div>
              </div>

              <div className="rate-stars">{renderStars()}</div>
            </div>
          </div>

          <div className="fiche-inf">
            <div className="specificities">
              <div className="container-title">
                <h2>Description</h2>
                <p>{cardData.description}</p>
              </div>
            </div>

            <div className="specificities">
              <div className="container-title">
                <h2>Equipements</h2>
                <div className="equipements">
                  <ul>
                    {cardData.equipments.map((equipments, index) => (
                      <li key={index}>{equipments}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
