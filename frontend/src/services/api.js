import axios from 'axios';
/*
  credentials: 'include',
  headers: {
    'content-type': 'application/json',
  },
*/
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;