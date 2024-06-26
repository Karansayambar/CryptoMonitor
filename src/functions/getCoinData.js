import axios from "axios";

export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error to load api");
      console.error(error);
      throw error; // Re-throw the error after logging it
    });
  return myData;
};
