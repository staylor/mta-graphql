import { createClient } from 'mta-realtime-subway-departures';

let client = null;

export default () => {
  if (client) {
    return client;
  }

  client = createClient(process.env.MTA_API_KEY);
  return client;
};
