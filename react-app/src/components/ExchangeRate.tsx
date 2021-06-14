import React from "react";
import PropTypes from "prop-types";
import ExchangeRateCard from "./ExchangeRateCard";
import { CURRENCY_EXCHANGE_RATE_QUERY } from "../queries/currencyExchangeRate";
import { useQuery } from "@apollo/react-hooks";

import { CurrencyExchangePanelInput } from "../types/CurrencyExchangePanel.types";

import { LIVE_POLLING_RATE } from "../constants/general";

function CurrencyExchangeRate({
  fromCurrency,
  targetCurrency,
  amount,
  live,
}: CurrencyExchangePanelInput) {
  const { loading, error, data } = useQuery(CURRENCY_EXCHANGE_RATE_QUERY, {
    variables: {
      fromCurrency,
      targetCurrency,
    },
    pollInterval: live ? LIVE_POLLING_RATE : undefined,
  });

  return (
    <ExchangeRateCard
      isLoading={loading}
      error={error}
      currency={targetCurrency}
      rate={data ? data.exchangeRate.rate : null}
      amount={amount}
      live={live}
    />
  );
}

CurrencyExchangeRate.propTypes = {
  fromCurrency: PropTypes.string,
  targetCurrency: PropTypes.string,
  amount: PropTypes.string,
};

export default CurrencyExchangeRate;
