import React, { useState, useEffect } from "react";
import Accordion from "../Accordion/Accordion";

const AboutKasa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Utilisation de fetch au lieu d'axios
      const response = await fetch("./kasaData.json");

      if (!response.ok) {
        // Gérer les erreurs si la requête n'est pas réussie
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      // Utiliser la méthode json() pour extraire les données JSON de la réponse
      const jsonData = await response.json();

      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="aboutus-specificities">
      {loading ? (
        <p>Téléchargement...</p>
      ) : data.aboutText && data.aboutText.length > 0 ? (
        data.aboutText.map((infokasa, index) => (
          <Accordion
            key={`accordion-${index}`}
            title={infokasa.title}
            description={
              <div className="about-describe" key={`describe-${index}`}>
                <p>{infokasa.describe}</p>
              </div>
            }
          />
        ))
      ) : (
        <p>Pas de données disponibles</p>
      )}
    </div>
  );
};

export default AboutKasa;
