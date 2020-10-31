import { getAirport } from "../db/db";

import {
  prefiles,
  prefile,
  pilots,
  pilot,
  controllers,
  controller,
  streams,
  events,
} from "./resolvers";

const resolvers = {
  Query: {
    controllers,
    controller,
    prefiles,
    prefile,
    pilots,
    pilot,
    streams,
    airport: getAirport,
    eventCalendar: events,
  },
};

export default resolvers;
