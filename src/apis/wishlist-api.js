import axios from "../config/axios";

export const getWishlistApi = () => axios.get("/wishlist");
export const addWishlist = (steamAppId) =>
  axios.post(`/wishlist/${steamAppId}`);
