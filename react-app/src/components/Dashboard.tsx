import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import useStyles from '../style/Dashboard.style';
 
import ExchangePanel from './ExchangePanel';
import ExchangeRate from './ExchangeRate';
import Headline from './Headline';
import ExchangeRateChart from './ExchangeRateChart';

const DAILY_RATE_CHART_LIMIT = 30;

type CurrencyExchangePanelInput = {
  fromCurrency: string,
  targetCurrency: string,
  amount: string
}

export default function Dashboard() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [fromCurrency, setFromCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleExchangePanelInput = ({
    fromCurrency, 
    targetCurrency, 
    amount}: CurrencyExchangePanelInput) => {
      if (!fromCurrency || !targetCurrency || !amount) {
        return 
      }
      setFromCurrency(fromCurrency);
      setTargetCurrency(targetCurrency);
      setAmount(amount);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Headline>
                Dicover foreign exchange rates.
              </Headline>
            </Grid>                
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ExchangePanel onInput={handleExchangePanelInput}/>
              </Paper>
            </Grid>              
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              {fromCurrency && targetCurrency && amount && 
                <ExchangeRateChart fromCurrency={fromCurrency} targetCurrency={targetCurrency} limit={DAILY_RATE_CHART_LIMIT}/>
              } 
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {fromCurrency && targetCurrency && amount && 
                    <ExchangeRate fromCurrency={fromCurrency} targetCurrency={targetCurrency} amount={amount}/>
                }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}