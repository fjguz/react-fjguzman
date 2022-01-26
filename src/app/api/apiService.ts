import axios from "axios";

const API = "http://localhost:4000";

const get = (url: string) =>
  axios.get(`${API}/${url}`).then((response) => response.data);

export const apiService = {
  get: get,
};
