import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteForever from "@material-ui/icons/DeleteForever";
import DoneOutline from "@material-ui/icons/DoneOutline";
import { useSelector } from "react-redux";
import man from "../assets/man.png";

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: "2px 4px",

    alignItems: "center",
    width: "90%",
    justifyContent: "center",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90%",
    marginTop: "15px",
    marginLeft: "5%",
    borderRadius: 30,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButtonDelete: {
    padding: 10,
    color: theme.palette.primary.dark,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function ProductCard() {
  const classes = useStyles();
  const { products } = useSelector((state) => ({
    products: state.products,
  }));

  return (
    <div className={classes.root1}>
      {products.length > 0 ? (
        products.map((product) => (
          <Paper component="form" className={classes.root} key={product}>
            <Typography variant="h6" component="h2" className={classes.input}>
              {product}
            </Typography>
            <IconButton
              type="submit"
              color="primary"
              className={classes.iconButtonDelete}
              aria-label="search"
            >
              <DeleteForever />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <DoneOutline />
            </IconButton>
          </Paper>
        ))
      ) : (
        <div>
          <Typography variant="h6" component="h2" className={classes.input}>
            Your List is empty <span>🙄</span>
          </Typography>
          <img src={man} alt="man" />
        </div>
      )}
    </div>
  );
}
