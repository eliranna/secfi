const alphavantageAPI = require("../../services/alphavantageAPI.js");

const dataSources = () => {
  return {
    alphavantageAPI: new alphavantageAPI(),
  };
};

module.exports = dataSources;
