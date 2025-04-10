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

export const addTeamMember = (jsonData, token) =>
  api.post("/addTeam",jsonData,{
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
}});

export const removeMember = (id,email,token) =>
  api.get(`/removeMember?memberId=${id}&email=${email}`,{ headers: {
    Authorization: `Bearer ${token}`
}});

export const sendEmail = (jsonData, token) => 
  api.post("/sendEmail",jsonData,{
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
}});
