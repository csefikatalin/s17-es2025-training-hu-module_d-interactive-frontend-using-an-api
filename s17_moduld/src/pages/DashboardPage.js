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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display:false,
      },
      title: {
        display: true,
        text: "Credit progress (Last 30 days)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Credits",
        },
      },
      x: {
        title: {
          display: false,
          text: "Date",
        },
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels, //X tengely
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((l, i) => i), //Y tengely
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  /* kördiagramhoz */
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data2 = {
    labels: ["Completed chapters", "Enrolled Courses"],
    datasets: [
      {
        label: "# of Votes",
        data: [user.stats.completedChapters, user.stats.enrolledCourses], 
        /* data: [12, 5] */
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
   const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Statisztikák",
      },
    },
  };

  return (
    <div className=" ">
      <div className="keret nagy padding">
        <h1>Welcome back, {user.user.name ? user.user.name : "Guest"}!</h1>
        <h2 className="alahuzas">
          Current balance <strong>{user.user.creditBalance||0}</strong> credits
        </h2>

        <div className="dobozok">
          <div className="keret">
            <h3>{user.stats.enrolledCourses||0}</h3>
            <p>enrolled courses</p>
          </div>
          <div className="keret">
            <h3>{user.stats.completedChapters}</h3>
            <p>Completed chapters</p>
          </div>
          <div className="keret">
            <h3>{user.stats.totalCreditsEarned}</h3>
            <p>Total credits earned</p>
          </div>
        </div>
        <div className="diagram">
          <div className="line keret">
            <Line options={options} data={data} />
          </div>
          <div className="pie keret">
            {" "}
            <Doughnut options={options2} data={data2} />
          </div>
        </div>
      </div>
    </div>
  );
}
