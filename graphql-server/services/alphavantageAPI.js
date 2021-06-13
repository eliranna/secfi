const { RESTDataSource } = require("apollo-datasource-rest");

class alphavantageAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://www.alphavantage.co/query?apikey=QPK789EHS0DB7Q2U`;
  }

  async getExchangeRate(fromCurrency, targetCurrency) {
    return this.get(`${this.baseURL}&function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${targetCurrency}`)
      .then(response => {
        if (response['Error Message']) 
          throw new Error(response['Error Message'])
        return response['Realtime Currency Exchange Rate']
      })
      .then(data => {
        return {
          rate: data['5. Exchange Rate'],
          lastRefreshed: data['6. Last Refreshed'],
          bidPrice: data['8. Bid Price'],
          askPrice: data['9. Ask Price']
        }
      }).catch(error => {
        return error
      })
  }

  async getDailyExchangeRate(fromCurrency, targetCurrency) {
    return this.get(`${this.baseURL}&function=FX_DAILY&from_currency=${fromCurrency}&to_currency=${targetCurrency}`)
      .then(response => {
        if (response['Error Message']) 
          throw new Error(response['Error Message'])
        return response['Time Series FX (Daily)']
      })
      .catch(error => {
        return error
      })
  }




  getDailyExchangeRate
}

module.exports = alphavantageAPI;
