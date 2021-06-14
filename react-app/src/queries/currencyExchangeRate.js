import { gql } from "@apollo/client";

export const CURRENCY_EXCHANGE_RATE_QUERY = gql`
  query ExchangeRate($fromCurrency: String!, $targetCurrency: String!) {
    exchangeRate(fromCurrency: $fromCurrency, targetCurrency: $targetCurrency) {
      rate
    }
  }
`;
