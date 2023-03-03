import axios from "../config/axios";

export const getWishlistApi = () => axios.get("/wishlist");
export const addWishlist = (steamAppId) =>
  axios.post(`/wishlist/${steamAppId}`);
export const removeWishlist = (wishlistId) =>
  axios.delete(`/wishlist/${wishlistId}`);
export const findWishlist = (steamAppid) =>
  axios.get(`/wishlist/find?steamAppid=${steamAppid}`);
