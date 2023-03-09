import axios from "axios";

export const api = axios.create({
  baseURL: "https://projeto-frontend-em-equipe-m3.onrender.com/",
  timeout: 5000,
});
