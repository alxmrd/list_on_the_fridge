import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logoFont from "../assets/logoFont.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolBar: {
    // background: "#212121",

    justifyContent: "space-between",
  },

  bottomToolbar: {
    background: "#E5E5E5",
    minHeight: "5px",
  },
}));

export default function LogoAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar className={classes.toolBar}>
          <img src={logoFont} alt="logo" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
