import axios from "../config/axios";

export const getAllUser = () => axios.get("/user/");
export const getProfileApi = () => axios.get("/user/:userId");
export const getUserById = (userId) => axios.get(`/user/${userId}`);

export const editProfileApi = (userId, formData) =>
  axios.patch("/user/" + userId, formData);
