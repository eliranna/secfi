const exchangeRate = require("./exchangeRate.resolver");
const locationChanged = require("./location-changed.resolver");

const resolvers = {
  Query: {
    exchangeRate,
  }
};

module.exports = resolvers;
