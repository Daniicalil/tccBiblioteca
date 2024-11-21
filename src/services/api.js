// api.js
import axios from "axios";

const api = axios.create({
  baseURL: 'http:/172.16.1.46:3000',
});

export default api;
