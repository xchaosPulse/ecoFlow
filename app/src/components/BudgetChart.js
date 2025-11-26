import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import budgetData from '../../data/budget1403.json';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const data = {
    labels: ['Oil', 'Tax', 'Other'],
    datasets: [
      {
        label: 'Revenue',
        data: [budgetData.revenue.oil, budgetData.revenue.tax, budgetData.revenue.other],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default BudgetChart;
