import { gql } from "@apollo/client";

export const CURRENCY_EXCHANGE_RATE_DAILY_QUERY = gql`
  query ExchangeRateDaily($fromCurrency: String!, $targetCurrency: String!) {
    exchangeRateDaily(fromCurrency: $fromCurrency, targetCurrency: $targetCurrency) {
        rates
      }
  }
`;