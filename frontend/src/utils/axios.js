import axios from "axios";


const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api"
    : "/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;