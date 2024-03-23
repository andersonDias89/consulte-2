// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001', // URL do seu servidor backend
});

export default api;
