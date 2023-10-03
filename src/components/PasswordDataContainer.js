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
        const processedData = passwords.map((password) =>
          passwordStrength(password)
        );
        setPasswordData(processedData);
      });
  }, []);

  return (
    <div>
      <PasswordLengthDistribution data={passwordData} />
      <CharacterDiversityDistribution data={passwordData} />
      <CharacterTypeDistribution data={passwordData} charType="lowercase" />
      <CharacterTypeDistribution data={passwordData} charType="uppercase" />
      <CharacterTypeDistribution data={passwordData} charType="number" />
      <CharacterTypeDistribution data={passwordData} charType="symbol" />
    </div>
  );
};

export default PasswordDataContainer;
