import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

import { useEffect, useState } from "react";
import {
  Box,
  debounce,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";

import currencies from "../utils/currencies";
import { CurrencyExchangePanelHandler } from "../types/CurrencyExchangePanel.types";

type ExchangeRateProps = {
  onInput: CurrencyExchangePanelHandler;
};

function ExchangePanel({ onInput }: ExchangeRateProps) {
  const [fromCurrency, setFromCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [live, setLive] = React.useState(false);

  useEffect(() => {
    onInput({
      fromCurrency,
      targetCurrency,
      amount,
      live,
    });
  }, [fromCurrency, targetCurrency, amount, live]);

  const handleAmountInputThrottled = debounce((value) => {
    setAmount(value);
  }, 1000);

  const handleLiveSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLive(!live);
  };

  return (
    <Grid container direction="column" justify="center" spacing={8}>
      <Grid container direction="row" justify="center" spacing={2}>
        <Grid item>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              type="number"
              fullWidth
              onChange={(e) => handleAmountInputThrottled(e.target.value)}
            />
          </form>
        </Grid>
        <Grid item>
          <Autocomplete
            id="combo-box-demo"
            options={currencies}
            getOptionLabel={(option) => option.name}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField {...params} label="Base Currency" variant="outlined" />
            )}
            onChange={(event, value: any) => {
              setFromCurrency(value && value.code);
            }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            id="combo-box-demo"
            options={currencies}
            getOptionLabel={(option) => option.name}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Target Currency"
                variant="outlined"
              />
            )}
            onChange={(event, value: any) =>
              setTargetCurrency(value && value.code)
            }
          />
        </Grid>
      </Grid>
      <Box m={2} />
      <Grid container direction="row" justify="center" spacing={2}>
        <FormControlLabel
          control={
            <Switch
              checked={live}
              onChange={handleLiveSwitchChange}
              name="live"
              color="primary"
            />
          }
          label="Live"
        />
      </Grid>
    </Grid>
  );
}

ExchangePanel.propTypes = {
  onInput: PropTypes.func,
};

export default ExchangePanel;
