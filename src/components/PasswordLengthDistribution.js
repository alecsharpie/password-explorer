// src/components/PasswordLengthDistribution.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PasswordLengthDistribution = ({ data }) => {
  // Create an array to store the count of each password length
  const passwordLengths = data.reduce((acc, curr) => {
    const length = curr.length;
    acc[length] = (acc[length] || 0) + 1;
    return acc;
  }, {});

  // Convert the object to an array of arrays for Highcharts
  const chartData = Object.entries(passwordLengths).map(([length, count]) => [
    parseInt(length),
    Math.round(count / data.length * 100, 2),
  ]);

  const options = {
    chart: {
      type: "column", // Column chart for histogram
    },
    title: {
      text: "Length Distribution",
    },
    xAxis: {
      title: {
        text: "Number of Characters",
      },
    },
    yAxis: {
      title: {
        text: "Frequency (%)",
      },
      format: "{text}%",
      max: 100,
    },
    series: [
      {
        name: "Passwords",
        data: chartData,
      },
    ],
    legend: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PasswordLengthDistribution;
