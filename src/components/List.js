import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "20px",
    justifyContent: "center",
    marginBottom: "55px",
  },

  button: {
    marginLeft: "5px",
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductCard />
    </div>
  );
}
