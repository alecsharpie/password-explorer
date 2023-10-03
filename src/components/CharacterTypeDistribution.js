// src/components/CharacterTypeDistribution.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CharacterTypeDistribution = ({ data, charType }) => {
  // Calculate the percentage of passwords containing the specified character type
  const count = data.filter((password) =>
    password.contains.includes(charType)
  ).length;
  const percentage = (count / data.length) * 100;

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `Distribution of Passwords Containing ${
        charType.charAt(0).toUpperCase() + charType.slice(1)
      } Characters`,
    },
    series: [
      {
        name: "Passwords",
        data: [
          {
            name: `${
              charType.charAt(0).toUpperCase() + charType.slice(1)
            } Characters`,
            y: percentage,
            sliced: true,
            selected: true,
          },
          {
            name: "Others",
            y: 100 - percentage,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CharacterTypeDistribution;
