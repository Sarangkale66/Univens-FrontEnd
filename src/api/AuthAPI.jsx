import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: `${apiUrl}/auth` });

export const googleAuth = (code) => api.get(`/google?code=${code}`);

export const signup = (jsonData) =>
  api.post(`/signup`, jsonData, { headers: { "Content-Type": "application/json" } });

export const signin = (jsonData) =>
  api.post(`/signin`, jsonData, { headers: { "Content-Type": "application/json" } });

export const logout = (token) =>
  api.get(`/logout`, { headers: { Authorization: `Bearer ${token}` } });
