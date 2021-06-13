import React from "react";
import CurrencyExchangeRateCard from './CurrencyExchangeRateCard';
import { CURRENCY_EXCHANGE_RATE_QUERY } from "../queries/currencyExchangeRate";
import { useQuery } from "@apollo/react-hooks";

type CurrencyExchangeRateProps = {
  fromCurrency: string,
  targetCurrency: string,
  amount: string
}

function CurrencyExchangeRate({ fromCurrency, targetCurrency, amount } : CurrencyExchangeRateProps) {

  const { loading, error, data } = useQuery(CURRENCY_EXCHANGE_RATE_QUERY, {
    variables: {
      fromCurrency,
      targetCurrency
    }
  });

  return (
    <CurrencyExchangeRateCard 
      isLoading={loading} 
      error={error}
      currency={targetCurrency} 
      rate={data ? data.exchangeRate.rate : null} 
      amount={amount}/> 
  )
}

export default CurrencyExchangeRate;
