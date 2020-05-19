import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://www.mocky.io/v2/5e8465c23000008400cf4395`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getData() {
    return apiClient.get();
  },
};
