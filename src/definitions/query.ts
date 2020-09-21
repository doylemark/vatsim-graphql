import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    flightplans: [Flightplan]
    flightplan(callsign: String!): Flightplan
    pilots: [Pilot]
    pilot(callsign: String!): Pilot
    controllers: [Controller]
    controller(callsign: String!): Controller
    atiservices: [Atis] 
    atiservice(callsign: String!): Atis
    streams: [Stream]
  }
`;

export default query;
