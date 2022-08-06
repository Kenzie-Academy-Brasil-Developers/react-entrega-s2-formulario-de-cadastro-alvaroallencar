import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 10000,
});

export default apiRequests;
