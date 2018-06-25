const typeDefs = `
type Departure {
  routeId: String
  time: Int
}

type Departures {
  S: [Departure]
  N: [Departure]
}

type Line {
  name: String
  departures: Departures
}

type Complex {
  complexId: Int
  name: String
  lines: [Line]
}

type Query {
  departures(complexId: Int): Complex
}

schema {
  query: Query
}
`;

export default typeDefs;
