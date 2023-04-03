import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3002",
  headers: { "Content-Type": "application/json" },
});

