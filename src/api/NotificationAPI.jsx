import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: `${apiUrl}/notification` });

export const getNotification = (token, page = 1, limit = 10) =>
  api.get(`/?page=${page}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${token}` },
});

  