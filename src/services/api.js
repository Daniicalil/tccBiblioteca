// api.js
import axios from "axios";
import { API_URL, API_PORT } from "@env"; // Importa variáveis do .env

const api = axios.create({
  baseURL: `${API_URL}:${API_PORT}`, // URL base com IP e porta
});

export default api;
