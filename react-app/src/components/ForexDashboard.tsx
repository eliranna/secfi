import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import CurrencyExchangeRate from './CurrencyExchangeRate';
import { useEffect, useState } from 'react';
import { debounce } from '@material-ui/core';
import CurrencyExchangePanel from "./CurrencyExchangePanel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    
    }
  }),
);  

type CurrencyExchangePanelInput = {
  fromCurrency: string,
  targetCurrency: string,
  amount: number
}

const ForexDashboared = () => {

  const classes = useStyles();

  const [fromCurrency, setFromCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState(1);

  const handleCurrencyExchangePanelInput = ({fromCurrency, targetCurrency, amount}: CurrencyExchangePanelInput) => {
    if (!fromCurrency || !targetCurrency || !amount) {
      return 
    }
    setFromCurrency(fromCurrency);
    setTargetCurrency(targetCurrency);
    setAmount(amount);
  }

  return (
    <Grid container direction="column" spacing={2}> 
      <CurrencyExchangePanel onInput={handleCurrencyExchangePanelInput}/>
      <Grid container direction="row" spacing={2}>
        <CurrencyExchangeRate fromCurrency={fromCurrency} targetCurrency={targetCurrency} amount={amount}/>
        <div>
          graph
        </div>
      </Grid>
      
    </Grid>
  )
};

export default ForexDashboared;