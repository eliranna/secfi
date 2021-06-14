const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    exchangeRate(fromCurrency: String!, targetCurrency: String!): Rate
    exchangeRateDaily(
      fromCurrency: String!
      targetCurrency: String!
      limit: Int
    ): [DailyRate]
  }

  type Rate {
    rate: String
  }

  type DailyRate {
    day: String
    values: DailyRateValues
  }

  type DailyRateValues {
    open: String
    high: String
    low: String
    close: String
  }
`;

module.exports = typeDefs;
