import axios from "axios";

export const fetchData = async (id) => {
  try {
    const url = id ? `/${id}.json` : "/kasaData.json";
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
