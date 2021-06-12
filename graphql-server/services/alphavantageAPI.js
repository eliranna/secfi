const { RESTDataSource } = require("apollo-datasource-rest");
const { LOCATIONS_MOCK_LIST } = require("./mock");

class alphavantageAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&apikey=QPK789EHS0DB7Q2U`;
  }

  async getExchangeRate(fromCurrency, targetCurrency) {
    return this.get(`${this.baseURL}&from_currency=${fromCurrency}&to_currency=${targetCurrency}`)
      .then(response => {
        return response['Realtime Currency Exchange Rate']
      })
      .then(data => {
        console.log(data)
        return {
          rate: data['5. Exchange Rate'],
          lastRefreshed: data['6. Last Refreshed'],
          bidPrice: data['8. Bid Price'],
          askPrice: data['9. Ask Price']
        }
      })
  }
}

module.exports = alphavantageAPI;
