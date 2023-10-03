import logo from "./logo.svg";
import "./App.css";

// src/App.js
import React from "react";
import AppNavigation from "./components/AppNavigation";
import EthicalGuidelines from "./components/EthicalGuidelines";
import PasswordRecommendations from "./components/PasswordRecomendations";
import PasswordManagerExplanation from "./components/PasswordManagerExplanation";
import TwoFactorAuthEducation from "./components/TwoFactorAuthEducation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Password Security</p>
      </header>
      <AppNavigation />
      <PasswordRecommendations />
      <PasswordManagerExplanation />
      <TwoFactorAuthEducation />
      <EthicalGuidelines />
    </div>
  );
}

export default App;
