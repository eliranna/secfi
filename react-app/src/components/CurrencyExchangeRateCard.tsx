import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

type CurrencyExchangeRateCardProps = {
    isLoading: Boolean,
    error: any,
    rate: number,
    amount: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1200,
    },
    rate: {
        fontSize: 90
    }
  }),
);

function CurrencyExchangeRateCard({ isLoading, error, rate, amount } : CurrencyExchangeRateCardProps) {

  const classes = useStyles();

  const computeExchangeRate = (rate: number, amount: number): number => {
      return rate * amount
  }
  
  return (
    <Paper className={classes.paper}>
        {isLoading ? <CircularProgress /> : (
            <span className={classes.rate}>
                {computeExchangeRate(rate, amount)}
            </span>
        )}
    </Paper>
  )
}

export default CurrencyExchangeRateCard;