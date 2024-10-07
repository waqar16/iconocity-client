import axios from "axios";
import Cookies from "js-cookie";

// export const baseURL = "http://192.168.1.29:8000";
export const baseURL = "https://app.iconocity.com/api/";

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
