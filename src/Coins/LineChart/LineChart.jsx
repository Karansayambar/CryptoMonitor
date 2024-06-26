import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { convertNumber } from '../../functions/convertNumber';

// Register necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ chartData, priceType,  multiAxis }) => {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
            crypto1: {
                type: "linear",
                display: true,
                position: "left",
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        if (priceType === "prices") return "$" + value.toLocaleString();
                        else return "$" + convertNumber(value);
                    }
                }
            },
            crypto2: {
                type: "linear",
                display: true,
                position: "right",
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        if (priceType === "prices") return "$" + value.toLocaleString();
                        else return "$" + convertNumber(value);
                    }
                }
            },
        },
    }

    return (
        <div>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
