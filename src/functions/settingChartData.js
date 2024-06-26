import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: "Crtpto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#dc5f00",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 1,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto2",
          data: prices2.map((price) => price[1]),
          borderColor: "#dc5f00",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 1,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#dc5f00",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(220, 95, 0, 0.2)",
          pointRadius: 1,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
