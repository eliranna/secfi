const exchangeRateDaily = async (_source, { fromCurrency, targetCurrency }, { dataSources }) => {
  const response = await dataSources.alphavantageAPI.getDailyExchangeRate(fromCurrency, targetCurrency);
  return response;
};

module.exports = exchangeRateDaily;