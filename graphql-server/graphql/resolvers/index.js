const exchangeRate = require("./exchangeRate.resolver");
const exchangeRateDaily = require("./exchangeRateDaily.resolver");

const resolvers = {
  Query: {
    exchangeRate,
    exchangeRateDaily
  }
};

module.exports = resolvers;
