import React from "react";
import DroneLiveMap from "./DroneLiveMap";
import { CURRENCY_EXCHANGE_RATE_QUERY } from "../queries/currencyExchangeRate";
import { Query } from 'react-apollo';

function DroneTracker({ fromCurrency, targetCurrency }) {
  return (
    <Query query={CURRENCY_EXCHANGE_RATE_QUERY} variables={{fromCurrency, targetCurrency}}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...';
        }

        console.log(data)

        return (
          <h2>
            Server Salutation:&nbsp;
            {error
              ? error.message + '. You probably don`t have GraphQL Server running at the moment - thats okay'
              : data.rate}
          </h2>
        );
      }}
    </Query>    
  )
}

export default DroneTracker;
