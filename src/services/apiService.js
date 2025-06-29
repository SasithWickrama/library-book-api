import { get } from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export async function fetchExternalBooks() {
  try {
    const response = await get(`${API_BASE_URL}/external/books`);
    return response.data;
  } catch (error) {
    console.error('API Service Error:', error);
    throw error;
  }
}

// Add other service methods...