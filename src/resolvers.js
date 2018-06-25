import client from './client';

const mtaClient = client();

const resolvers = {
  Query: {
    departures(_, { complexId }) {
      return mtaClient.departures(complexId).then(response => {
        const data = {
          complexId: response.complexId,
          name: response.name,
          lines: [],
        };

        Object.keys(response.lines).forEach(key => {
          const line = response.lines[key];
          data.lines.push(line);
        });

        return data;
      });
    },
  },
};

export default resolvers;
