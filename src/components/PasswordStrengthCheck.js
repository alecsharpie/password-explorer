// src/components/PasswordStrengthCheck.js
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { passwordStrength } from "check-password-strength";
import "./PasswordStrengthCheck.css";

const PasswordStrengthCheck = () => {
  const [password, setPassword] = useState("");
  const [strengthData, setStrengthData] = useState(null);

  const getStrengthColor = (id) => {
    switch (id) {
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
      default:
        return "grey";
    }
  };

  const fade = useSpring({
    opacity: 1,
    config: { duration: 300 },
  });

  const barGrow = useSpring({
    width: strengthData ? `${strengthData.id * 33.33}%` : "0%",
    backgroundColor: getStrengthColor(strengthData ? strengthData.id : 0),
    config: { duration: 300 },
  });

  const handleChange = (e) => {
    setPassword(e.target.value);
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
    setStrengthData(
      e.target.value
        ? passwordStrength(e.target.value, passwordStrengthConfig)
        : null
    );
  };

  return (
    <div className="component-content">
      <section id="passwordStrengthCheck">
        <h2>Strength Check</h2>
      </section>
      <div className="strength-checker">
        <label>
          Enter Password:{" "}
          <input
            className="input-password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className="strength-bar-bg">
          <animated.div className="strength-bar" style={barGrow}></animated.div>
        </div>
        <div style={{ position: "relative" }}>
          <animated.div style={fade} className="strength-data">
            <p>Strength: {strengthData ? strengthData.value : "-"}</p>
            <p>Length: {strengthData ? strengthData.length : "-"}</p>
            <p>
              Character Types:{" "}
              <span
                className={
                  strengthData?.contains.includes("lowercase") ? "active" : ""
                }
              >
                Lowercase
              </span>
              ,{" "}
              <span
                className={
                  strengthData?.contains.includes("uppercase") ? "active" : ""
                }
              >
                Uppercase
              </span>
              ,{" "}
              <span
                className={
                  strengthData?.contains.includes("number") ? "active" : ""
                }
              >
                Number
              </span>
              ,{" "}
              <span
                className={
                  strengthData?.contains.includes("symbol") ? "active" : ""
                }
              >
                Symbol
              </span>
            </p>
          </animated.div>
        </div>
        <div className="criteria">
          <p>
            <strong>Strength Level:</strong>
          </p>
          <ul>
            <li>
              <span className="too-weak">Too Weak (~0 seconds to crack):</span>{" "}
              Criteria: 1 long & 1 type
            </li>
            <li>
              <span className="weak">Weak (~40 minutes to crack):</span>{" "}
              Criteria: 6 long & 2 types
            </li>
            <li>
              <span className="medium">Medium (~2 months to crack):</span>{" "}
              Criteria: 8 long & 4 types
            </li>
            <li>
              <span className="strong">
                Strong (~2 thousand years to crack):
              </span>{" "}
              Criteria: 12 long & 4 types
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthCheck;
