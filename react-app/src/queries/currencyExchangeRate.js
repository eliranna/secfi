import { gql } from "@apollo/client";

const LOCATION_FIELDS = `
    id
    latitude,
    longitude,
    altitude    
`;

export const CURRENCY_EXCHANGE_RATE_QUERY = gql`
  query ExchangeRate($fromCurrency: String!, $targetCurrency: String!) {
    exchangeRate(fromCurrency: $fromCurrency, targetCurrency: $targetCurrency) {
        rate
      }
  }
`;