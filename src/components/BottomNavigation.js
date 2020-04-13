import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import FastfoodIcon from "@material-ui/icons/Fastfood";
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
    backgroundColor: "#5da2d5",
  },
});

export default function BottomNavigate() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <MuiThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="List"
          icon={<FormatListNumberedIcon />}
        />
        <BottomNavigationAction label="Categories" icon={<ViewAgendaIcon />} />
        <BottomNavigationAction label="Products" icon={<FastfoodIcon />} />
      </BottomNavigation>
    </MuiThemeProvider>
  );
}
