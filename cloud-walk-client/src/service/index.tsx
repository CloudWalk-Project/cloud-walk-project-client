import axios from "axios";

//export const api = axios.create({ baseURL: "http://localhost:3333" });
export const api = axios.create({
  baseURL: "https://dev-i-art.up.railway.app/",
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});
