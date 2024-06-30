import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("response", response.data);
      return response.data[priceType];
    })
    .catch((error) => {
      console.error(error);
      throw error; // Re-throw the error after logging it
    });
  return prices;
};
