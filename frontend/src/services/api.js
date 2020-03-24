import axios from 'axios';

const api = axios.create({
  baseURL: 'https://isdevbackend.herokuapp.com',
});

export default api;