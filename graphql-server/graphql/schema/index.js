const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Query {
    exchangeRate(fromCurrency: String!, targetCurrency: String!): Rate
  }

  type Rate {
    rate: String
  }
`;

module.exports = typeDefs;
