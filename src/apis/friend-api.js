import axios from "../config/axios";

export const requestFriend = (userId) => axios.post(`/friend/${userId}`);
