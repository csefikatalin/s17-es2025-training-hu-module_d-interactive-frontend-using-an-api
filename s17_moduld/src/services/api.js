import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

        
 export  function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
      "X-API-TOKEN": token,
      "Content-Type": "application/json",
    };
  }
/* 
myAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // a config.headers-hez hozzáadjuk a token-t
      config.headers = {
        ...config.headers,
        ...getAuthHeaders()  // itt a getAuthHeaders visszaadja a X-API-TOKEN-t
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
); */

export default myAxios;

