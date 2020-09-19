import express from "express";
import * as sentry from "@sentry/node";
import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";

import resolvers from "./resolvers";
import definitions from "./definitions";

dotenv.config();

const PORT = 3000;
const dsn = process.env.SENTRY_DSN;

sentry.init({ dsn });

const app = express();

const server = new ApolloServer({ typeDefs: definitions, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀  http://localhost:${PORT}${server.graphqlPath}`);
});
