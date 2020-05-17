import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

export default function NotFound() {
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "20vh",
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <StyleRoot className={classes.root}>
      <div className="test" style={styles.bounce}>
        <Fab
          variant="extended"
          color="secondary"
          aria-label="add"
          component={Link}
          to={"/list_on_the_fridge/"}
        >
          <AddShoppingCart className={classes.extendedIcon} />
          Time For Shopping
        </Fab>
      </div>
    </StyleRoot>
  );
}
