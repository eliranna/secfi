import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "300px",
  },
}));

export default function RateExchangeErrorMessage() {
  const classes = useStyles();
  return <img className={classes.image} src="./images/error.png" />;
}
