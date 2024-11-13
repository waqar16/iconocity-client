import axios from "axios";
import Cookies from "js-cookie";

// export const baseURL = "https://app.iconocity.com/api/"  
// export const baseURL = "http://3.233.197.138/api/";
export const baseURL = "http://127.0.0.1:8000/"  

const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(function (config) {
  let token = Cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
