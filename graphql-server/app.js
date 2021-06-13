const http = require("http");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const dataSources = require("./graphql/data-sources");

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
const app = express();

server.applyMiddleware({ app });

// Web Socket Middleware
const httpServer = http.createServer(app);
//server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () => {
  console.log(`server ready at http://localhost:4000${server.graphqlPath}`);
});
