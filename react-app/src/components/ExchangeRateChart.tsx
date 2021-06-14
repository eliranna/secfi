import React from "react";
import PropTypes from 'prop-types';
import CurrencyExchangeRateCard from './CurrencyExchangeRateCard';
import { CURRENCY_EXCHANGE_RATE_DAILY_QUERY } from "../queries/currencyExchangeRateDaily";
import { useQuery } from "@apollo/react-hooks";
import DailyRateChart from "./DailyRateChart";

type ExchangeRateChartProps = {
  fromCurrency: string,
  targetCurrency: string,
  limit?: number
}

function ExchangeRateChart({ fromCurrency, targetCurrency, limit } : ExchangeRateChartProps) {

  const { loading, error, data } = useQuery(CURRENCY_EXCHANGE_RATE_DAILY_QUERY, {
    variables: {
      fromCurrency,
      targetCurrency,
      limit
    },
    //pollInterval: 500
  });

  console.log(data)

  return (
    <DailyRateChart data={data && data.exchangeRateDaily}/>
  )
}

ExchangeRateChart.propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  limit: PropTypes.number
};

export default ExchangeRateChart;