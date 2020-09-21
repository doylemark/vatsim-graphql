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
  },
};

export default resolvers;
