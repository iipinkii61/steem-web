import axios from "../config/axios";

export const getProfileApi = () => axios.get("/user/profile");
