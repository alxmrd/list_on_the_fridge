import React from "react";
import LogoAppBar from "./components/AppBar.js";
import BottomNavigate from "./components/BottomNavigation.js";
import "./App.css";
import logoOnScreen from "./assets/logoOnScreen.png";
function App() {
  return (
    <div className="App">
      <LogoAppBar />

      <header className="App-header">
        <img src={logoOnScreen} className="App-logo" alt="logo" />
        <BottomNavigate />
      </header>
    </div>
  );
}

export default App;
