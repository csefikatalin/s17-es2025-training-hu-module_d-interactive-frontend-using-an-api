import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
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
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

/* vonaldiagramhoz  */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    
    {
      label: 'Dataset 1',
      data: labels.map((l,i) => i),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

/* kördiagramhoz */
ChartJS.register(ArcElement, Tooltip, Legend);
export const data2 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function DashboardPage() {
  const { user } = useContext(AuthContext);


  return (
    <div className=" ">
      <div className="keret nagy padding">
        <h1>Welcome back, {user.name ? user.name : "Guest"}!</h1>
        <h2 className="alahuzas">Current balance 25 credits</h2>
       
        <div className="dobozok">
          <div className="keret">
            <h3>3</h3>
            <p>enrolled courses</p>
          </div>
          <div className="keret">
            <h3>8</h3>
            <p>Completed chapters</p>
          </div>
          <div className="keret">
            <h3>25</h3>
            <p>Total credits earned</p>
          </div>
        </div>
        <div className="diagram">
          <div className="line keret"><Line options={options} data={data} /></div>
          <div className="pie keret"> <Doughnut data={data2} /></div>
        </div>
      </div>
    </div>
  );
}
