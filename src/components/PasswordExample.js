// src/components/PasswordExample.js
import React, { useEffect, useState } from "react";

const PasswordExample = () => {
  const [passwords, setPasswords] = useState([]);
  const [samplePasswords, setSamplePasswords] = useState([]);

  useEffect(() => {
    // Fetch password data
    fetch(
      "https://raw.githubusercontent.com/alecsharpie/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt"
    )
      .then((response) => response.text())
      .then((data) => {
        const passwordsArray = data.split("\n"); // Split data into array of passwords
        setPasswords(passwordsArray);
      });
  }, []); // Empty dependency array so this runs once on mount

  useEffect(() => {
    if (passwords.length > 0) {
      const sampleSize = 50; // Number of passwords to show, adjust as needed
      const sampledPasswords = [];

      while (sampledPasswords.length < sampleSize) {
        const randomIndex = Math.floor(Math.random() * passwords.length);
        const selectedPassword = passwords[randomIndex];

        if (!sampledPasswords.includes(selectedPassword)) {
          // Ensure no duplicates in sample
          sampledPasswords.push(selectedPassword);
        }
      }
      setSamplePasswords(sampledPasswords);
    }
  }, [passwords]);

  return (
      <div className="component-content">
        <h2>Example Passwords</h2>
        <i>(50 randomly chosen from the same SecLists project)</i>
        <p>{samplePasswords.join(",  ")}</p>
      </div>
  );
};

export default PasswordExample;
