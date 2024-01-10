import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "../Accordion/Accordion";

const AboutKasa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("./kasaData.json");
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
