const axios = require("axios");

export async function getAllUsers() {
  const response = await axios.get("/api/listusers");
  return response.data;
}

export async function createUser(data) {
  const response = await axios.post(`/api/createuser`, { user: data });
  return response.data;
}
