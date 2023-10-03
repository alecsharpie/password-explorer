// src/components/PasswordDataContainer.js
import React, { useEffect, useState } from "react";
import { passwordStrength } from "check-password-strength";
import PasswordLengthDistribution from "./PasswordLengthDistribution"; // Child component for the histogram
import CharacterDiversityDistribution from './CharacterDiversityDistribution'; // Import new component
import CharacterTypeDistribution from './CharacterTypeDistribution'; // Import new component


const PasswordDataContainer = () => {
  const [passwordData, setPasswordData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/alecsharpie/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt"
    )
      .then((response) => response.text())
      .then((data) => {
        const passwords = data.split("\n");
        const passwordStrengthConfig = [
          {
            id: 0,
            value: "Too weak",
            minDiversity: 0,
            minLength: 0,
          },
          {
            id: 1,
            value: "Weak",
            minDiversity: 2,
            minLength: 6,
          },
          {
            id: 2,
            value: "Medium",
            minDiversity: 4,
            minLength: 8,
          },
          {
            id: 3,
            value: "Strong",
            minDiversity: 4,
            minLength: 12,
          },
        ];
        const processedData = passwords.map((password) =>
          passwordStrength(password, passwordStrengthConfig)
        );
        setPasswordData(processedData);
      });
  }, []);

  return (
    <div>
      <div className="chart-grid">
        <div className="chart-container">
          <PasswordLengthDistribution data={passwordData} />
        </div>
        <div className="chart-container">
          <CharacterDiversityDistribution data={passwordData} />
        </div>
        <div className="chart-container">
          <CharacterTypeDistribution data={passwordData} charType="lowercase" />
        </div>
        <div className="chart-container">
          <CharacterTypeDistribution data={passwordData} charType="uppercase" />
        </div>
        <div className="chart-container">
          <CharacterTypeDistribution data={passwordData} charType="number" />
        </div>
        <div className="chart-container">
          <CharacterTypeDistribution data={passwordData} charType="symbol" />
        </div>
        {/* ... Other chart components go here, each wrapped in a div with class chart-container ... */}
      </div>
    </div>
  );
};

export default PasswordDataContainer;
