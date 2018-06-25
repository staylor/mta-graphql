# mta-graphql

To install:
```
yarn --ignore-engines
```
Add a `.env` file with values set for `SERVER_PORT` and `MTA_API_KEY`

To run GraphQL:
```
yarn dev
```

Use GraphiQL to inspect your data - this links to a sample query: [local query](http://localhost:8080/graphiql?query=%7B%0A%20%20departures(complexId%3A%20625)%20%7B%0A%20%20%20%20complexId%0A%20%20%20%20name%0A%20%20%20%20lines%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20departures%20%7B%0A%20%20%20%20%20%20%20%20S%20%7B%0A%20%20%20%20%20%20%20%20%20%20routeId%0A%20%20%20%20%20%20%20%20%20%20time%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20N%20%7B%0A%20%20%20%20%20%20%20%20%20%20routeId%0A%20%20%20%20%20%20%20%20%20%20time%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).
