import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import useStyles from "../style/Dashboard.style";

import ExchangePanel from "./ExchangePanel";
import ExchangeRate from "./ExchangeRate";
import Headline from "./shared/Headline";
import ExchangeRateChart from "./ExchangeRateChart";

import { CurrencyExchangePanelHandler } from "../types/CurrencyExchangePanel.types";
import { DAILY_RATE_CHART_LIMIT } from "../constants/general";
import Card from "./shared/Card";

export default function Dashboard() {
  const classes = useStyles();

  const [fromCurrency, setFromCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [live, setLive] = useState(false);

  const handleExchangePanelInput: CurrencyExchangePanelHandler = ({
    fromCurrency,
    targetCurrency,
    amount,
    live,
  }) => {
    if (fromCurrency && targetCurrency && amount) {
      setFromCurrency(fromCurrency);
      setTargetCurrency(targetCurrency);
      setAmount(amount);
      setLive(live);
    }
  };

  const exchangeRateDisplay = (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Card height="440px">
          <ExchangeRateChart
            fromCurrency={fromCurrency}
            targetCurrency={targetCurrency}
            limit={DAILY_RATE_CHART_LIMIT}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Card height="440px">
          <ExchangeRate
            fromCurrency={fromCurrency}
            targetCurrency={targetCurrency}
            amount={amount}
            live={live}
          />
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={classes.intro}>
                <Headline>Dicover foreign exchange rates.</Headline>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Card height="200px">
                <ExchangePanel onInput={handleExchangePanelInput} />
              </Card>
            </Grid>
          </Grid>
          {fromCurrency && targetCurrency && amount && exchangeRateDisplay}
        </Container>
      </main>
    </div>
  );
}
