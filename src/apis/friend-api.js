import axios from "../config/axios";

export const requestFriend = (userId) => axios.post(`/friend/${userId}`);
export const getAllFriends = () => axios.get("/friend/friends");
export const deleteFriend = (friendId) => axios.delete(`/friend/${friendId}`);
export const acceptFriend = (requesterId) =>
  axios.patch(`/friend/${requesterId}`);
