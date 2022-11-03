import axios from "axios";

export const api = axios.create({ baseURL: "https://i-art.up.railway.app/" });

api.interceptors.request.use((config: any) => {
    try {
      const token = localStorage.getItem("jwt");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error:any) {
      console.log(error);
    }
  });