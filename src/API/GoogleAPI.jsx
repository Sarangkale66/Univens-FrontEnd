import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${apiUrl}/auth`,
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
