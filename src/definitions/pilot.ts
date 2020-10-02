import { gql } from "apollo-server-express";

const pilot = gql`
  type Pilot {
    cid: Int
    name: String
    callsign: String
    server: String
    latitude: Float
    longitude: Float
    altitude: Int
    groundspeed: Int
    transponder: Int
    heading: Int
    qnh_i_hg: Int
    qnh_mb: Int
    flight_plan: Flightplan
    logon_time: String
    last_updated: String
  }
`;

export default pilot;
