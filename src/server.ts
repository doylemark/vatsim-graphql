import express from "express";
import * as sentry from "@sentry/node";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import resolvers from "./resolvers";
import definitions from "./definitions";

const PORT = 3000;
const dsn = process.env.SENTRY_DSN;

sentry.init({ dsn });

const app = express();

app.use(cors());

const server = new ApolloServer({ typeDefs: definitions, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT, path: "/api" }, () => {
  console.log(`🚀  http://localhost:${PORT}${server.graphqlPath}`);
});
