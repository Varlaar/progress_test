import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ACCESS_TOKEN,
  timeout: 1000,
  headers: {
    AccessKey: process.env.REACT_APP_ACCESS_KEY,
  },
});
