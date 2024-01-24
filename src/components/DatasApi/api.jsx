export const fetchData = async (id) => {
  try {
    const url = id ? `/${id}.json` : "/kasaData.json";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
