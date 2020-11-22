import { gql } from "apollo-server-express";

const history = gql`
  type History {
    date: String!
    pilot_connections: Int!
    controller_connections: Int!
    total_connections: Int!
  }
`;

export default history;
