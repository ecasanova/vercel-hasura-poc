import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
