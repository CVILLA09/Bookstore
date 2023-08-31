const axios = require('axios');

const api = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

const createApp = async () => {
  try {
    const response = await api.post('/apps/');
    return response.data;
  } catch (error) {
    return null;
  }
};

const getAppId = async () => {
  const appId = await createApp();
  console.log('Your App ID:', appId);
};

getAppId();
