import https from "https";
import fs from "fs";

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

const httpsServer = https.createServer({
  key: fs.readFileSync("/etc/letsencrypt/live/my_api_url/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/my_api_url/fullchain.pem"),
}, app);

httpsServer.listen(443, () => {
  console.log(`🚀  http://localhost:${PORT}${server.graphqlPath}`);
});
