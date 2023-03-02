import axios from "../config/axios";

export const getProfileApi = (userId) => axios.get("/user/" + userId);
