import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "http://192.168.1.17:8007";
// export const baseURL = "http://3.233.197.138/api/";

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
