import React, { useEffect } from "react";
import LogoAppBar from "./components/AppBar.js";
import BottomNavigate from "./components/BottomNavigation.js";
import "./App.css";
import logoOnScreen from "./assets/logoOnScreen.png";
import NotFound from "./components/NotFound.js";
import List from "./components/List.js";
import Products from "./components/Products.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { addProduct } from "./store/actions/actions";
import { useDispatch } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#145d75",
      dark: "#ce1212",
    },
    secondary: {
      main: "#F3D250",
    },
  },
  typography: {
    fontFamily: "Courier, monospace",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
function App() {
  const dispatch = useDispatch();
  var allEntries = JSON.parse(localStorage.getItem("products"));
  useEffect(() => {
    if (allEntries) {
      allEntries.map((entry) => dispatch(addProduct(entry)));
    }
  });
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
                <Route exact path="/list_on_the_fridge/" component={List} />
                <Route
                  path="/list_on_the_fridge/Products"
                  component={Products}
                />
                <Route component={NotFound} />
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
