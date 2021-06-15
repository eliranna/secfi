# Near Realtime FOREX exchange dashboard

### Description

This sample outlines a full-stack implementation of a near Real-time FOREX exchange application using GraphQL, Apollo Server, Apollo Client, Node.js, React, TypeScript and Material-UI.

## How to run

#### Install & run the server

```
cd graphql-server
npm i
node app.js
```

#### Install & run the React application

```
cd react-app
npm i
npm run start
```

## Design

For this implementation, I had to choose between two possible approaches:

- RESTfull API + Redux-based client
- GraphQL-based API + Apollo-based client + React hooks

I have chosen option (2) for several reasons: 
(a) GraphQL-based solutions allow fetching of exact portions of data, which prevents possible under-fetching and over-etching. 
(b) GraphQL-based solutions strongly decouple between the API implementation and client. This allows a faster development process for distributed teams. 
(c) Less boilerplate.

This is a description of the design: 

##Frontend (React + TypeScript + Apollo Client + Material UI)

The dashboard holds the main state. The ExchangePanel updates this state, as the ExchangeRate and the ExchangeRateChart components consume it.
The ExchangePanel component holds an inner state, which allows debouncing and possibly other inner UI logic.
The ExchangeRate and ExchangeRateChart components are both designed by the pattern of the smart/dumb components: The container component executes GraphQL queries, while the contained component is presentational.
The GraphQL queries are handled using Apollo react hooks API.
Near real-time monitoring is done using interval polling.

##Backend (NodeJS + Apollo Server)

The GraphQL schema exposes two Queries, one for querying the current Exchange rate and the other for querying the chart data.
Reduces retrieve data by calling a specific service.
The service retrieves data by calling an external API and re-arranges it.



