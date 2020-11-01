import { gql } from "apollo-server-express";

const prefile = gql`
  type Prefile {
    cid: Int
    name: String
    callsign: String
    flight_plan: Flightplan
    last_updated: String
  }
`;

export default prefile;
