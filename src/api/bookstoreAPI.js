import axios from 'axios';

// Get the App ID from the .env file
const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;

const api = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

// Function to add a new book
export const addBookAPI = async (book) => {
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
export const removeBookAPI = async (itemId) => {
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
