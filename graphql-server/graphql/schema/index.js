const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Query {
    exchangeRate(fromCurrency: String!, targetCurrency: String!): Rate
    exchangeRateDaily(fromCurrency: String!, targetCurrency: String!): [DailyRate]
  }

  type Rate {
    rate: String
  }

  type DailyRate {
    open: String,
    high: String,
    low: String,
    close: String
  }

`;

module.exports = typeDefs;
