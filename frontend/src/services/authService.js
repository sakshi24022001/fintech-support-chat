import axios from "axios";

const API = axios.create({
  // Live URL
  baseURL: "https://fintech-support-chat.onrender.com",
  
//  Local url
  // baseURL: "http://localhost:5000/api",
});

export const loginUser = (data) =>
  API.post("/auth/login", data);
