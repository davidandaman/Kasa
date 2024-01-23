export const fetchData = async (id) => {
  try {
    const url = id ? `/${id}.json` : "/kasaData.json";

    // Utilisation de fetch au lieu d'axios
    const response = await fetch(url);

    if (!response.ok) {
      // Gérer les erreurs si la requête n'est pas réussie
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Utiliser la méthode json() pour extraire les données JSON de la réponse
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
