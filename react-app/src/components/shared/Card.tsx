import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fixedHeightCard: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow:
      "rgb(78 88 125 / 10%) 0px 1px 54px, rgb(48 66 138 / 7%) 20px 21px 73px",
    height: (props: any) => props.height,
  },
}));

export default function Card({ children, ...props }: any) {
  const { fixedHeightCard } = useStyles(props);
  return <Paper className={`${fixedHeightCard}`}>{children}</Paper>;
}
