const exchangeRateDaily = async (_source, { fromCurrency, targetCurrency, limit }, { dataSources }) => {
  const response = await dataSources.alphavantageAPI.getDailyExchangeRate(fromCurrency, targetCurrency, limit);
  return response;
};

module.exports = exchangeRateDaily;