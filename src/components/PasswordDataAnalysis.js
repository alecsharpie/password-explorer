// src/components/PasswordDataAnalysis.js
import React from "react";

const PasswordDataAnalysis = () => {
  return (
    <div className="component-content">
      <div>
        <h2>Common Password Analysis</h2>
        <p>
          Using a "common password" list we can visualise the security of what
          many people consider a safe passwords.
        </p>
        <p>
          This info can help you spot and avoid using popular (read: not so
          secure) passwords.
        </p>
        <p>
          {" "}
          These visuals highlight password lengths, the use of numbers, special
          characters, and lower/upper case in these passwords.
        </p>
        <p>
          The following data was sourced from the SecLists project on{" "}
          <a
            href="https://github.com/danielmiessler/SecLists"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default PasswordDataAnalysis;
