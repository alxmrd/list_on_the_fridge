import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "20px",
    backgroundColor: "#dbf2ff",
  },

  title: {
    fontSize: 17,
  },
});

export default function Product() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>Word of the Day</Typography>
      </CardContent>
    </Card>
  );
}
