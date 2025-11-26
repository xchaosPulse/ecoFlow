import React from 'react';
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
import { Line } from 'react-chartjs-2';
import historicalData from '../../data/historical_data.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalChart = () => {
  const data = {
    labels: historicalData.map(d => d.year),
    datasets: [
      {
        label: 'GDP',
        data: historicalData.map(d => d.gdp),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} />;
};

export default HistoricalChart;
