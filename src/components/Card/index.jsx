import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { fetchData } from "../DatasApi/api";
import Accordion from "../Accordion/Accordion";
import Caroussel from "../Slideshow";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const jsonData = await fetchData();
        const idFromUrl = window.location.pathname.split("/").pop();

        // Utiliser useLocation pour obtenir des informations sur l'emplacement actuel
        // et vérifier si nous sommes sur la route principale
        const isMainRoute = location.pathname === "/";

        // Si idFromUrl est null ou s'il s'agit de la route principale, ne pas rediriger
        if (!idFromUrl || (idFromUrl === "" && isMainRoute)) {
          setLoading(false);
          return;
        }

        const foundCard = jsonData.locationsList.find(
          (loc) => loc.id === idFromUrl
        );

        if (!foundCard) {
          // Rediriger vers la page d'erreur si la carte n'est pas trouvée
          setLoading(false);
          navigate("/error");
          return;
        }

        setCardData(foundCard);
        setLoading(false);
      } catch (error) {
        // Gérer les erreurs si nécessaire
        setLoading(false);
      }
    };

    fetchCardData();
  }, [navigate, location]);

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
          <Caroussel pictures={cardData.pictures} />
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
              <Accordion
                title="Description"
                description={<p>{cardData.description}</p>}
              />
            </div>

            <div className="specificities">
              <div className="container-title">
                <Accordion
                  title="Équipements"
                  description={
                    <ul>
                      {cardData.equipments.map((equipments, index) => (
                        <li key={index}>{equipments}</li>
                      ))}
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
