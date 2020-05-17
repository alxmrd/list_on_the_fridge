import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteForever from "@material-ui/icons/DeleteForever";
import DoneOutline from "@material-ui/icons/DoneOutline";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-around",
    marginTop: "10%",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
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

  return (
    <div className={classes.root1}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Add product on the list"
          inputProps={{ "aria-label": "search google maps" }}
        />
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
      <Fab color="secondary" aria-label="add" size="medium">
        <AddIcon />
      </Fab>
    </div>
  );
}
