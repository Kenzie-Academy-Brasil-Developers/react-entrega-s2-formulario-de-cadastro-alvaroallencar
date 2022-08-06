import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});

export default apiRequests;
