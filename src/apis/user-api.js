import axios from "../config/axios";

export const getProfileApi = (userId) => axios.get("/user/" + userId);

export const editProfileApi = (formData) => axios.patch("/user", formData);
