import axios from "axios";

export const get100Coins = () => {
  const mycoins = axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return mycoins;
};
