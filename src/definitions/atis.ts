import { gql } from "apollo-server-express";

const atis = gql`
  type Atis {
    cid: Int
    name: String
    callsign: String
    frequency: String
    facility: Int
    rating: Int
    server: String
    visual_range: Int
    text_atis: String
    last_updated: String
    logon_time: String
  }
`;

export default atis;
