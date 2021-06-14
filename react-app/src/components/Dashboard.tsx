import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CurrencyExchangePanel from './CurrencyExchangePanel';
import CurrencyExchangeRate from './CurrencyExchangeRate';
import Headline from './Headline';
import ExchangeRateChart from './ExchangeRateChart';

const DAILY_RATE_CHART_LIMIT = 30;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgb(78 88 125 / 10%) 0px 1px 54px, rgb(48 66 138 / 7%) 20px 21px 73px'
  },
  fixedHeight: {
    height: 440,
  }
}));

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

  const handleCurrencyExchangePanelInput = ({fromCurrency, targetCurrency, amount}: CurrencyExchangePanelInput) => {
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
            {/* Headline */}
            <Grid item xs={12}>
              <Headline>
                Dicover foreign exchange rates.
              </Headline>
            </Grid>                
            {/* Exchange Rate Panel */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CurrencyExchangePanel onInput={handleCurrencyExchangePanelInput}/>
              </Paper>
            </Grid>              
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              {fromCurrency && targetCurrency && amount && 
                <ExchangeRateChart fromCurrency={fromCurrency} targetCurrency={targetCurrency} limit={DAILY_RATE_CHART_LIMIT}/>
              } 
              </Paper>
            </Grid>
            {/* Exchange Rate */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {fromCurrency && targetCurrency && amount && 
                    <CurrencyExchangeRate fromCurrency={fromCurrency} targetCurrency={targetCurrency} amount={amount}/>
                }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}