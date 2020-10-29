import { gql } from "apollo-server-express";

const event = gql`
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

  type EventCollection {
    date: String!
    events: [Event]
  }
`;

export default event;
