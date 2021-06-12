import React from "react";
import apollo from "./apolloSetup";
import { ApolloProvider } from "@apollo/react-hooks";
import ForexDashboard from "./components/ForexDashboard";

const App = () => (
  <ApolloProvider client={apollo}>
    <React.Fragment>
      <ForexDashboard/>
    </React.Fragment>
  </ApolloProvider>
);

export default App;
