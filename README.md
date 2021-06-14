# realtime FOREX exchange dashboard

### Description
This sample outlines a full-stack implementation of a (near) Real-time FOREX exchange application using GraphQL, Apollo Server, Apollo Client, Node.js, React, TypeScript and Material-UI. 

## How to run

#### Install & run the server
```
cd graphql-server
npm i
node app.js
```

#### Install the React application
```
cd react-app
npm i
npm run start
```

#### Run the MQTT publisher
This is a mock for any MQTT publisher, including a real drone. 
```
node mqtt-publisher.js
```

#### Run the React app
This is a mock for any MQTT publisher, including a real drone. Drones can be connected to the same WIFI network and act as MQTT publishers. 
```
cd react-app
npm i
npm run start
```
