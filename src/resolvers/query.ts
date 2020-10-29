import { getAirport } from "../db/db";

import {
  flightplans,
  flightplan,
  pilots,
  pilot,
  controllers,
  controller,
  atiservice,
  atiservices,
  streams,
  events,
} from "./resolvers";

const resolvers = {
  Query: {
    controllers,
    controller,
    flightplans,
    flightplan,
    pilots,
    pilot,
    atiservice,
    atiservices,
    streams,
    airport: getAirport,
    eventCalendar: events,
  },
};

export default resolvers;
