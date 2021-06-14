const { RESTDataSource } = require("apollo-datasource-rest");

const API_KEY = "QPK789EHS0DB7Q2U"

const API_FUNCTIONS = {
  EXCHANGE_RATE: "CURRENCY_EXCHANGE_RATE",
  DAILY_EXCHANGE_RATE: "FX_DAILY"
}

class alphavantageAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://www.alphavantage.co/query?apikey=${API_KEY}`;
  }

  async getExchangeRate(fromCurrency, targetCurrency) {
    return this.get(`${this.baseURL}&function=${API_FUNCTIONS.EXCHANGE_RATE}&from_currency=${fromCurrency}&to_currency=${targetCurrency}`)
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

  async getDailyExchangeRate(fromCurrency, targetCurrency, limit) {
    return this.get(`${this.baseURL}&function=${API_FUNCTIONS.DAILY_EXCHANGE_RATE}&from_symbol=${fromCurrency}&to_symbol=${targetCurrency}`)
      .then(response => {
        if (response['Error Message']) 
          throw new Error(response['Error Message'])
        return response['Time Series FX (Daily)']
      }).then(data => {
        const parsedData = []
        for (const [key, value] of Object.entries(data)) {
          parsedData.push({
            day: key,
            values: {
              open: value["1. open"],
              high: value["2. high"],
              low: value["3. low"],
              close: value["4. close"]
            } 
          })
        }
        return parsedData.slice(0, limit)
      })
      .catch(error => {
        return error
      })
  }
}

module.exports = alphavantageAPI;
