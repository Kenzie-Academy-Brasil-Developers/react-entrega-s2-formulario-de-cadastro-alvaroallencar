import axios from "axios";

const kenzieHubApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 10000,
});

export default kenzieHubApi;
