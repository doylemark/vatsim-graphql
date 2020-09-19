import * as express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./resolvers";
import definitions from "./definitions";

const PORT = 3000;

const app = express();

const server = new ApolloServer({ typeDefs: definitions, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀  http://localhost:${PORT}${server.graphqlPath}`);
});
