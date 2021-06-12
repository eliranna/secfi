const exchangeRate = async (_source, { fromCurrency, targetCurrency }, { dataSources }) => {
  const response = await dataSources.alphavantageAPI.getExchangeRate(fromCurrency, targetCurrency);
  return response;
};

module.exports = exchangeRate;
