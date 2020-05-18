import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard.js";
import { addProduct } from "../store/actions/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "20px",
    justifyContent: "center",
  },

  button: {
    marginLeft: "5px",
  },
});

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  var allEntries = JSON.parse(localStorage.getItem("products"));
  useEffect(() => {
    dispatch(addProduct(allEntries.map((entry) => entry)));
  });

  return (
    <div className={classes.root}>
      <ProductCard />
    </div>
  );
}
