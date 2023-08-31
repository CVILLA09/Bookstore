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
    // console.error('Error creating app:', error);
    return null;
  }
};

// Function to add a new book
export const addBookAPI = async (appId, book) => {
  const url = `/apps/${appId}/books`;
  try {
    const response = await api.post(url, book);
    return response.data;
  } catch (error) {
    // console.error('Error adding book:', error);
    return null;
  }
};

// Function to remove a book
export const removeBookAPI = async (appId, itemId) => {
  const url = `/apps/${appId}/books/${itemId}`;
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    // console.error('Error removing book:', error);
    return null;
  }
};

export default api;
