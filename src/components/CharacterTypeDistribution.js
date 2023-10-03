// src/components/CharacterTypeDistribution.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CharacterTypeDistribution = ({ data, charType }) => {
  // Calculate the percentage of passwords containing the specified character type
  const count = data.filter((password) =>
    password.contains.includes(charType)
  ).length;
  const percentage = Math.round((count / data.length) * 100);

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `Percent of Passwords Containing ${
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
            name: `Non-${
              charType.charAt(0).toUpperCase() + charType.slice(1)
            } Characters`,
            y: 100 - percentage,
          },
        ],
        dataLabels: {
          formatter: function () {
            if (this.y > 0) {
              return (
                this.point.name +
                ": " +
                Highcharts.numberFormat(this.point.percentage, 0) +
                " %"
              );
            }
          },
        },
      },
    ],
    legend: {
      enabled: true,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CharacterTypeDistribution;
