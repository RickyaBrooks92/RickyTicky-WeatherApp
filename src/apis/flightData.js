import axios from "axios";
const BASE_URL =
  "https://api.aviationstack.com/v1/flights ? access_key = 592d9edba6f55d3fe9a1c771a9578bc9";
export default axios.create({
  baseUrl: BASE_URL,
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
  },
});
