import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import axios from 'axios';

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
const fetchData = async () => {
  try {
    return await axios.get('./services/tries.json');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const triesData = fetchData().data;
const labels = Object.keys(triesData);
const try_data = Object.values(triesData).map(obj => obj.Try);

export const data = {
  labels,
  datasets: [
    {
      label: 'Tries',
      data: labels.map(() => try_data.pop()),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
