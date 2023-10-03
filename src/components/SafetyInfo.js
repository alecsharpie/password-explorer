// src/components/SafetyInfo.js
import React from "react";

const SafetyInfo = () => {
  return (
    <div className="component-content">
      <div className="safety-info">
        <h2>Is Using Password Checkers Safe?</h2>
        <p>
          No! It’s wise to be cautious online! Never input real credentials into
          unknown sites, including password checkers.
        </p>
        <p>Why our tool is safe?</p>
        <ul>
          <li>
            Your passwords never leave your browser; we don’t store them. Feel
            free to disconnect from the internet and try!
          </li>
          <li>
            Even if we did receive your password (which we won’t), we wouldn’t
            know who you are.
          </li>
          <li>Our goal is to enhance online security, not compromise it!</li>
        </ul>
      </div>
    </div>
  );
};

export default SafetyInfo;
