import { gql } from "@apollo/client";

export const CURRENCY_EXCHANGE_RATE_DAILY_QUERY = gql`
  query ExchangeRateDaily(
    $fromCurrency: String!
    $targetCurrency: String!
    $limit: Int
  ) {
    exchangeRateDaily(
      fromCurrency: $fromCurrency
      targetCurrency: $targetCurrency
      limit: $limit
    ) {
      day
      values {
        open
        high
        low
        close
      }
    }
  }
`;
