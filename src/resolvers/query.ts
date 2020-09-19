import {
  flightplans,
  flightplan,
  pilots,
  pilot,
  controllers,
  controller,
  atiservice,
  atiservices,
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
  },
};

export default resolvers;
