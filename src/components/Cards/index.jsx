import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="show-card" key={apartment.id}>
          <img src={apartment.cover} alt={apartment.title} />
          <div className="title">
            <p>{apartment.title}</p>
          </div>
        </div>
      ))
    ) : (
      <p>Pas de données disponibles</p>
    );
  };

  return <div className="show-cards">{renderCards()}</div>;
};

export default Cards;
