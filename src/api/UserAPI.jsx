import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: `${apiUrl}/user` });

export const searchEmail = (email, token) =>
  api.get(`/search?email=${email}`, {
    headers: { Authorization: `Bearer ${token}` },
});

export const getUserUpdate = (jsonData, token) =>
  api.put('/update', jsonData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
});

export const getTeamMembers = (token) =>
  api.get("/team",{ headers: {
    Authorization: `Bearer ${token}`
}});