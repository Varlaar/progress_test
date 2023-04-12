import { instance } from "../../api/instance";

export const requestAccessToken = (data) =>
  instance.post("/api/v3/clients/accesstoken", data);
