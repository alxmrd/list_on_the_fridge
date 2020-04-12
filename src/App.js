import React from "react";
import LogoAppBar from "./components/AppBar.js";
import "./App.css";
import logoOnScreen from "./assets/logoOnScreen.png";
function App() {
  return (
    <div className="App">
      <LogoAppBar />
      <header className="App-header">
        <img src={logoOnScreen} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
