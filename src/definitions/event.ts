import { gql } from "apollo-server-express";

const airport = gql`
  type Event {
    id: Int
    type: String!
    vso_name: String
    name: String!
    link: String!
    division: String!
    region: String!
    start_time: String!
    end_time: String!
    short_description: String!
    description: String!
    banner: String!
  }
`;

export default airport;
