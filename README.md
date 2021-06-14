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

## Architecture

#### Frontend (React + TypeScript + Apollo Client + Material UI)

- The dashboard holds the main state. The ExchangePanel updates this state, as the ExchangeRate and the ExchangeRateChart components consumes it. 
- The ExchangePanel component holds an inner state, which allows debouncing and possibly other inner UI logic. 
- The ExchangeRate and ExchangeRateChart components are both designed by the smart/dumb components pattern: The container component executes GraphQL queries, while the contained component is presentational. 
- The GraphQL queries are handeled using Apollo react hooks API. 
- Near Realtime monitoring is done using interval polling. 

#### Backend (NodeJS + Apollo Server)

- The GraphQL schema exposes two Queries, one for quering the current Exchange rate and the other for quering the chart data.
- Reduces retrive data by calling a specific service. 
- The service retrive data by calling an external API and re-arrange it.

## Discussion
For this implementation, I had to choose between two possible approches:

(a) RESTfull API + Redux-based client
(b) GraphQL-based API + Apollo-based client + React hooks

I have choosen option (b) for several reasons: 

(1) GraphQL-based solutions allows fetching of exact portions of data, which prevents possible underfetching and overfetching. 
(2) GraphQL-based solutions strongly decouples between the API implementation and client. This allows faster developemnt process for disturbuted teams. 
(3) Less boilerplate.



