import { convertDate } from "./convertDate";

export const setChartData = ({ setChartData, prices }) => {
  setChartData({
    labels: prices.map((date) => convertDate(date[0])),
    datasets: [
      {
        label: "Price",
        data: prices.map((price) => price[1]),
        borderColor: "#dc5f00",
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        backgroundColor: "rgba(220, 95, 0, 0.2)",
        pointRadius: 1,
      },
    ],
  });
};
