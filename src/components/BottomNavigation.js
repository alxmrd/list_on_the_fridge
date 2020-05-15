import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import SimpleList from "./SimpleList.js";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f3d250",
    },
  },
});
const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "hidden",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#435E77",
  },
});

export default function BottomNavigate() {
  const classes = useStyles();
  const initialState = () => Number(localStorage.getItem("TabValue") || 0);
  const [value, setValue] = React.useState(initialState);

  return (
    <MuiThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          localStorage.setItem("TabValue", newValue);
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/list_on_the_fridge/List"
          label="List"
          icon={<FormatListNumberedIcon />}
        />

        <SimpleList />

        <BottomNavigationAction
          component={Link}
          to="/list_on_the_fridge/Products"
          label="Products"
          icon={<FastfoodIcon />}
        />
      </BottomNavigation>
    </MuiThemeProvider>
  );
}
