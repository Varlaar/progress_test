import { instance } from "../../api/instance";

const url = process.env.REACT_APP_API_BONUS || "";

export const requestBonus = (accessToken) =>
  instance.get(`${url}/api/v3/ibonus/generalinfo/${accessToken}`);
