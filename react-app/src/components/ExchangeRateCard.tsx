import React from "react";
import PropTypes from "prop-types";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import useStyles from "../style/ExchangeRateCard.style";

import RateExchangeErrorMessage from "./RateExchangeErrorMessage";
import { Chip } from "@material-ui/core";

type ExchangeRateCardProps = {
  isLoading: Boolean;
  currency: string;
  error: any;
  rate: string;
  amount: string;
  live: boolean;
};

function ExchangeRateCard({
  isLoading,
  error,
  currency,
  rate,
  amount,
  live,
}: ExchangeRateCardProps) {
  const classes = useStyles();

  const computeRoundedExchangeRate = (rate: number, amount: number): number => {
    return Math.round(rate * amount * 100) / 100;
  };

  return isLoading ? (
    <CircularProgress />
  ) : error ? (
    <RateExchangeErrorMessage />
  ) : (
    <Grid container direction="column" justify="center" alignItems="center">
      {live && (
        <Grid>
          <Chip variant="outlined" color="primary" size="small" label="live" />
        </Grid>
      )}
      <Grid item className={classes.rateNumber}>
        <span>
          {computeRoundedExchangeRate(
            Number.parseFloat(rate),
            Number.parseFloat(amount)
          )}
        </span>
      </Grid>
      <Grid item>
        <span>{currency}</span>
      </Grid>
    </Grid>
  );
}

ExchangeRateCard.propTypes = {
  isLoading: PropTypes.bool,
  currency: PropTypes.string,
  error: PropTypes.object,
  rate: PropTypes.string,
  amount: PropTypes.string,
};

export default ExchangeRateCard;
