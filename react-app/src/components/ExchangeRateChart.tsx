import React from "react";
import PropTypes from "prop-types";

import { useQuery } from "@apollo/react-hooks";

import { CURRENCY_EXCHANGE_RATE_DAILY_QUERY } from "../queries/currencyExchangeRateDaily";
import DailyRateChart from "./DailyRateChart";

type ExchangeRateChartProps = {
  fromCurrency: string;
  targetCurrency: string;
  limit?: number;
};

function ExchangeRateChart({
  fromCurrency,
  targetCurrency,
  limit,
}: ExchangeRateChartProps) {
  const { loading, error, data } = useQuery(
    CURRENCY_EXCHANGE_RATE_DAILY_QUERY,
    {
      variables: {
        fromCurrency,
        targetCurrency,
        limit,
      },
    }
  );

  return (
    <DailyRateChart
      isLoading={loading}
      error={error}
      data={data && data.exchangeRateDaily}
    />
  );
}

ExchangeRateChart.propTypes = {
  fromCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

export default ExchangeRateChart;
