import logo from "./logo.svg";
import "./App.css";

// src/App.js
import React from "react";
import AppNavigation from "./components/AppNavigation";
import SafetyInfo from "./components/SafetyInfo.js";
import PasswordDataContainer from "./components/PasswordDataContainer";
import EthicalGuidelines from "./components/EthicalGuidelines";
import PasswordRecommendations from "./components/PasswordRecomendations";
import PasswordManagerExplanation from "./components/PasswordManagerExplanation";
import TwoFactorAuthEducation from "./components/TwoFactorAuthEducation";
import PasswordStrengthCheck from "./components/PasswordStrengthCheck";
import PasswordDataAnalysis from "./components/PasswordDataAnalysis";
import PasswordExample from "./components/PasswordExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Password Security</p>
      </header>
      <AppNavigation />
      <SafetyInfo />
      <PasswordStrengthCheck />
      <PasswordDataAnalysis />
      <PasswordDataContainer />
      <PasswordExample />
      <PasswordRecommendations />
      <PasswordManagerExplanation />
      <TwoFactorAuthEducation />
      <EthicalGuidelines />
    </div>
  );
}

export default App;
