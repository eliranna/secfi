import React from "react";
import apollo from "./apolloSetup";
import { ApolloProvider } from "@apollo/react-hooks";
import Dashboard from "./components/Dashboard";

const App = () => (
  <ApolloProvider client={apollo}>
    <React.Fragment>
      <Dashboard/>
    </React.Fragment>
  </ApolloProvider>
);

export default App;
