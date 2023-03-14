import axios from "../config/axios";

export const getTransactionApi = () => axios.get("/transaction");

export const createTransactionApi = (input) =>
  axios.post("/transaction", input);

// export const deleteTransactionApi = (transId) =>
//   axios.delete("/transaction/" + transId);
