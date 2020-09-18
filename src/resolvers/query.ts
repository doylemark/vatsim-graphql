import {
  flightplans,
  flightplan,
  pilots,
  pilot,
  controllers,
  controller,
} from "./resolvers";

const resolvers = {
  Query: {
    controllers,
    controller,
    flightplans,
    flightplan,
    pilots,
    pilot,
  },
};

export default resolvers;
