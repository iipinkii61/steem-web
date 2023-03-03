import axios from "../config/axios";

export const getProfileApi = (userId) => axios.get("/user/" + userId);

export const editProfileApi = (userId, formData) =>
  axios.patch("/user/" + userId, formData);
