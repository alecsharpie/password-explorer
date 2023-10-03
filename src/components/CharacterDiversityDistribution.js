// src/components/CharacterDiversityDistribution.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CharacterDiversityDistribution = ({ data }) => {
  // Create an array to store the count of each diversity level
  const diversityCounts = data.reduce((acc, curr) => {
    const diversity = curr.contains.length;
    acc[diversity] = (acc[diversity] || 0) + 1;
    return acc;
  }, {});

  // Convert the object to an array of arrays for Highcharts
  const chartData = Object.entries(diversityCounts).map(
    ([diversity, count]) => [
      parseInt(diversity),
      Math.round((count / data.length) * 100, 2),
    ]
  );

  const options = {
    chart: {
      type: "column", // Column chart for histogram
    },
    title: {
      text: "Character Diversity Distribution",
    },
    xAxis: {
      title: {
        text: "Number of Different Character Types: lowercase, uppercase, symbol, & number",
      },
      categories: ["1 Type", "2 Types", "3 Types", "4 Types"],
      max: 3
    },
    yAxis: {
      title: {
        text: "Frequency (%)",
      },
      max: 100,
    },
    series: [
      {
        name: "Passwords",
        data: chartData,
        showInLegend: false, // Since there is only one series, no need for legend

      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CharacterDiversityDistribution;
