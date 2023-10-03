// src/components/PasswordRecommendations.js
import React from "react";

const PasswordRecommendations = () => {
  return (
    <div className="component-content">
      <h2>Good Password Recommendations</h2>
      <p>
        Strong passwords are essential for protecting your online accounts. A
        strong password should:
      </p>
      <ul>
        <li>Be at least 12 characters long</li>
        <li>Include numbers, symbols, uppercase and lowercase letters</li>
        <li>Avoid using dictionary words or common phrases</li>
        <li>Never use personal information, like your name or birthday</li>
      </ul>
    </div>
  );
};

export default PasswordRecommendations;
