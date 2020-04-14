import React from "react";
import LogoAppBar from "./components/AppBar.js";
import BottomNavigate from "./components/BottomNavigation.js";
import "./App.css";
import logoOnScreen from "./assets/logoOnScreen.png";
import Categories from "./components/Categories.js";
import SimpleList from "./components/SimpleList.js";
import Products from "./components/Products.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LogoAppBar />

      <header className="App-header">
        <img src={logoOnScreen} className="App-logo" alt="logo" />
        <Router>
          <div>
            <Switch>
              <Route path="/list_on_the_fridge/SimpleList">
                <SimpleList />
              </Route>
              <Route path="/list_on_the_fridge/Categories">
                <Categories />
              </Route>
              <Route path="/list_on_the_fridge/Products">
                <Products />
              </Route>
            </Switch>
          </div>

          <BottomNavigate />
        </Router>
      </header>
    </div>
  );
}

export default App;
