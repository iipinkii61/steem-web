import axios from "../config/axios";

export const getUserInfoApi = () => axios.get("/user/profile");
