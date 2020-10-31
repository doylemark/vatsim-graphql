import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    flightplans: [Flightplan]
    flightplan(callsign: String!): Flightplan
    pilots: [Pilot]
    pilot(callsign: String!): Pilot
    controllers: [Controller]
    controller(callsign: String!): Controller
    streams: [Stream]
    airport(icao: String!): Airport
    eventCalendar: [EventCollection]
  }
`;

export default query;
