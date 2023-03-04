import axios from "axios";

export const getCartApi = () => axios.get("/cart");
export const setCartApi = (steamAppId) => axios.post("/cart/" + steamAppId);
export const deleteItemApi = (itemId) => axios.delete("/cart/" + itemId);
