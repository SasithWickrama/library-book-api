const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL;

exports.fetchExternalBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/external/books`);
    return response.data;
  } catch (error) {
    console.error('API Service Error:', error);
    throw error;
  }
};

// Add other service methods...