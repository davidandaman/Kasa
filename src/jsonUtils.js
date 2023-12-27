// Create a file named `jsonUtils.js`

const fetchJSON = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error('Error fetching JSON data');
    }
  };
  
  const validateJSON = (jsonData) => {
    // Validate the JSON data here
    // ...
  };
  