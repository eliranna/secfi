import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { useEffect, useState } from 'react';
import { debounce } from '@material-ui/core';

import currencies from '../utils/currencies';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
  }),
);  

type CurrencyExchangeRateProps = {
    onInput: (values: {
        fromCurrency: string,
        targetCurrency: string,
        amount: string
    }) => void
}

function CurrencyExchangePanel({ onInput } : CurrencyExchangeRateProps) {

    const classes = useStyles();

    const [fromCurrency, setFromCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amount, setAmount] = useState("");

    useEffect(() => {
        onInput({
            fromCurrency,
            targetCurrency,
            amount
        })
    }, [fromCurrency, targetCurrency, amount]);
  
    const handleAmountInputThrottled = debounce(value => {
      setAmount(value)
    }, 1000);

  return (
        <Grid container direction="row" justify="center" spacing={2}> 
            <Grid item>
            <Autocomplete
                id="combo-box-demo"
                options={currencies}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Targets Currency" variant="outlined"/>}
                onChange={(event, value: any) => {setFromCurrency(value && value.code)}}
            /> 
            </Grid>            
            <Grid item>
            <Autocomplete
                id="combo-box-demo"
                options={currencies}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Base Currency" variant="outlined"/>}
                onChange={(event, value: any) => setTargetCurrency(value && value.code)}
            />                
            </Grid>
            <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Amount" variant="outlined" type="number" fullWidth onChange={e => handleAmountInputThrottled(e.target.value)}/>
            </form>
            </Grid>
        </Grid>
  )
}

CurrencyExchangePanel.propTypes = {
  onInput: PropTypes.func
};

export default CurrencyExchangePanel;