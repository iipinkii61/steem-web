import axios from "axios";

export const getCartApi = () => axios.get("/cart");
export const setCartApi = (steamAppId) => axios.post("/cart/" + steamAppId);
export const deleteCartApi = (steamAppId) =>
  axios.delete("/cart/" + steamAppId);
