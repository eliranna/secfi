const exchangeRate = async (_source, { fromCurrency, targetCurrency }, { dataSources }) => {
  const response = await dataSources.alphavantageAPI.getExchangeRate(fromCurrency, targetCurrency);
  const data = response['Realtime Currency Exchange Rate']
  const x = {
    rate: data['5. Exchange Rate'],
    lastRefreshed: data['6. Last Refreshed'],
    bidPrice: data['8. Bid Price'],
    askPrice: data['9. Ask Price'],
  }
  return x;
};

module.exports = exchangeRate;
