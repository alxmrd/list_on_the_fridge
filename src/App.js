import React from "react";
import LogoAppBar from "./components/AppBar.js";
import BottomNavigate from "./components/BottomNavigation.js";
import "./App.css";
import logoOnScreen from "./assets/logoOnScreen.png";
import Categories from "./components/Categories.js";
import SimpleList from "./components/SimpleList.js";
import Products from "./components/Products.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3D3D3D",
    },
    secondary: {
      main: "#F3D250",
    },
  },
  typography: {
    fontFamily: "Arial",
    fontSize: 15,
  },
});
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </div>
  );
}

export default App;
