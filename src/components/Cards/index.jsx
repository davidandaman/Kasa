import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Card";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("./kasaData.json");
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCards = () => {
    return loading ? (
      <p>Téléchargement...</p>
    ) : data.locationsList ? (
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
      <div className="show-cards">{renderCards()}</div>
      {/* Ajoutez Card avec les données transmises */}
      <Card data={data} />
    </div>
  );
};

export default Cards;
