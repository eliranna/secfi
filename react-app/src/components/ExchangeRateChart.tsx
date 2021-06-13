import React from "react";
import CurrencyExchangeRateCard from './CurrencyExchangeRateCard';
import { CURRENCY_EXCHANGE_RATE_DAILY_QUERY } from "../queries/currencyExchangeRateDaily";
import { useQuery } from "@apollo/react-hooks";

type ExchangeRateChartProps = {
  fromCurrency: string,
  targetCurrency: string
}

function ExchangeRateChart({ fromCurrency, targetCurrency } : ExchangeRateChartProps) {

  const { loading, error, data } = useQuery(CURRENCY_EXCHANGE_RATE_DAILY_QUERY, {
    variables: {
      fromCurrency,
      targetCurrency
    }
  });

  return (
    <div></div>
  )
}

export default ExchangeRateChart;