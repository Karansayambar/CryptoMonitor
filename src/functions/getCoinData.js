import axios from "axios";

export const getCoinData = ({ id }) => {
  return axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Re-throw the error after logging it
    });
};
