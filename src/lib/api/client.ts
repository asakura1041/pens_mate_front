import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3100/"
})

export default client