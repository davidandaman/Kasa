import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { fetchData } from "../DatasApi/api";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const jsonData = await fetchData();
        setData(jsonData);
      } catch (error) {
        // Gérer les erreurs si nécessaire
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  const renderCards = () => {
    return data.locationsList ? (
      data.locationsList.map((apartment) => (
        <Link
          to={`/card/${apartment.id}`}
          state={{ cardData: apartment }}
          key={apartment.id}
        >
          {" "}
          <div className="show-card">
            <img src={apartment.cover} alt={apartment.title} />
            <div className="title">
              <p>{apartment.title}</p>
            </div>
          </div>
        </Link>
      ))
    ) : (
      <p>Pas de données disponibles</p>
    );
  };

  return (
    <div>
      {loading ? (
        <p>Téléchargement...</p>
      ) : (
        <>
          <div className="show-cards">{renderCards()}</div>
          <Card data={data} />
        </>
      )}
    </div>
  );
};

export default Cards;
