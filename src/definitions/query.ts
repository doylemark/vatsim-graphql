import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    prefiles: [Prefile]
    prefile(callsign: String!): Prefile
    pilots: [Pilot]
    pilot(callsign: String!): Pilot
    controllers: [Controller]
    controller(callsign: String!): Controller
    streams: [Stream]
    airport(icao: String!): SingleAirport
    airports: [Airport]
    onlineAirports(icao: String!): [Airport]
    eventCalendar: [EventCollection]
    history: [History]
  }
`;

export default query;
