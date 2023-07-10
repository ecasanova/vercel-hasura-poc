import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HASURA_PROJECT_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
  },
  cache: new InMemoryCache(),
});

export default client;
