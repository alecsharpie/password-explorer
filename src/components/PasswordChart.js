// src/components/PasswordChart.js
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PasswordChart = () => {
  const [chartData, setChartData] = useState({
    lengthDistribution: [],
    numericFrequency: 0,
    specialCharFrequency: 0,
    uppercaseFrequency: 0,
    lowercaseFrequency: 0,
    totalChars: 0, // added totalChars to calculate percentages later
  });

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/alecsharpie/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt"
    )
      .then((response) => response.text())
      .then((data) => {
        const passwords = data.split("\n");
        processData(passwords);
      });
  }, []);

  const processData = (passwords) => {
    let lengthDist = Array(20).fill(0);
    let numericCount = 0;
    let specialCharCount = 0;
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let totalChars = 0;

    passwords.forEach((password) => {
      const length = password.length;
      if (length <= 20) lengthDist[length]++;
      totalChars += length;

      for (let char of password) {
        if (/[0-9]/.test(char)) numericCount++;
        else if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) specialCharCount++;
        else if (/[A-Z]/.test(char)) uppercaseCount++;
        else if (/[a-z]/.test(char)) lowercaseCount++;
      }
    });

    setChartData({
      lengthDistribution: lengthDist.map(
        (count) => (count / passwords.length) * 100
      ), // convert to percentage
      numericFrequency: (numericCount / totalChars) * 100, // convert to percentage
      specialCharFrequency: (specialCharCount / totalChars) * 100, // convert to percentage
      uppercaseFrequency: (uppercaseCount / totalChars) * 100, // convert to percentage
      lowercaseFrequency: (lowercaseCount / totalChars) * 100, // convert to percentage
    });
  };

  const createChartOptions = (title, data) => ({
    title: { text: title },
    xAxis: { categories: Array.from({ length: 21 }, (_, i) => i) },
    series: [{ name: "Percentage", data, type: "column" }],
    yAxis: { title: { text: "Percentage" }, max: 100 }, // set yAxis to percentage
    plotOptions: {
      column: { pointPadding: 0, groupPadding: 0, borderWidth: 0 },
    },
  });

  return (
    <div className="component-content">
      <h2>Password Characteristics Visualization</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={createChartOptions(
          "Length Distribution",
          chartData.lengthDistribution
        )}
      />
      {/* Adding additional charts for each characteristic */}
      <HighchartsReact
        highcharts={Highcharts}
        options={createChartOptions("Numeric Character Frequency", [
          chartData.numericFrequency,
        ])}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={createChartOptions("Special Character Frequency", [
          chartData.specialCharFrequency,
        ])}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={createChartOptions("Uppercase Letter Frequency", [
          chartData.uppercaseFrequency,
        ])}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={createChartOptions("Lowercase Letter Frequency", [
          chartData.lowercaseFrequency,
        ])}
      />
    </div>
  );
};

export default PasswordChart;
