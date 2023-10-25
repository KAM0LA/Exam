import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN } from "../constants/const";
const token = Cookies.get(TOKEN);
const apiKey = import.meta.env.VITE_API_KEY;

const request = axios.create({
  baseURL: apiKey,
  timeout: 10000,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default request;