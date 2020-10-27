import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import fetch from "node-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";

const uri = "http://localhost:3000";

const cache = new InMemoryCache();
const link = new HttpLink({ uri, fetch });

const graphQlClient = new ApolloClient({ link, cache });

export default graphQlClient;
