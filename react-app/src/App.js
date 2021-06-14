import React from "react";
import apollo from "./apolloSetup";
import { ApolloProvider } from "@apollo/react-hooks";
import Dashboard from "./components/Dashboard";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = () => (
  <ApolloProvider client={apollo}>
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <Dashboard />
      </React.Fragment>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
