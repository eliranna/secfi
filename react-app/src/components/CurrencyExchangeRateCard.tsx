import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import RateExchangeErrorMessage from './RateExchangeErrorMessage';

type CurrencyExchangeRateCardProps = {
    isLoading: Boolean,
    currency: string,
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
    rateNumber: {
        fontSize: 90,
    },
    currencyLabel: {
      //textAlign: 'center',
    }
  }),
);

function CurrencyExchangeRateCard({ isLoading, error, currency, rate, amount } : CurrencyExchangeRateCardProps) {

  const classes = useStyles();

  const computeRoundedExchangeRate = (rate: number, amount: number): number => {
      return Math.round(rate * amount * 100) / 100;
  }
  
  return isLoading ? <CircularProgress/> : (
    error ? <RateExchangeErrorMessage/> : (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.rateNumber}>
          <span>
              {computeRoundedExchangeRate(rate, amount)}
          </span>  
        </Grid>
        <Grid item className={classes.currencyLabel}>
          <span>
              {currency}
          </span>
        </Grid>
      </Grid>
    )
  )
}

export default CurrencyExchangeRateCard;