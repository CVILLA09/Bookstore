import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

// Function to create a new app and get its ID
export const createApp = async () => {
  try {
    const response = await api.post('/apps/');
    return response.data;
  } catch (error) {
    console.error("Error creating app:", error);
    return null;
  }
};

export default api;
