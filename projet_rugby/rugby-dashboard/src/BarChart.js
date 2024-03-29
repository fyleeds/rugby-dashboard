import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
const { getTeams, getTries } = require('./services/apiService');

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Graphique Exemple',
    },
  },
};
const dataObject = getTries();
const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
// const api_data = {getTries}
// console.log(api_data)
export const data = {
  labels,
  datasets: [
    {
      label: 'Ventes',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // Vous pouvez ajouter plus de séries ici
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
