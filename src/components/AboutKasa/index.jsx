import React, { useState, useEffect } from "react";
import axios from "axios";

const AboutKasa = () => {
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
    ) : data.aboutText ? (
      data.aboutText.map((infokasa, index) => (
        <div className="aboutus-specificity" key={`specificity-${index}`}>
          <div className="about-title">
            <h2 key={`title-${index}`}>{infokasa.title}</h2>
          </div>
          <div className="about-describe" key={`describe-${index}`}>
            <p>{infokasa.describe}</p>
          </div>
        </div>
      ))
    ) : (
      <p>Pas de données disponibles</p>
    );
  };

  return <div className="aboutus-specificities">{renderCards()}</div>;
};

export default AboutKasa;
