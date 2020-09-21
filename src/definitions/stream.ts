import { gql } from "apollo-server-express";

const stream = gql`
  type Stream {
    id: String
    user_id: String
    user_name: String
    game_id: String
    type: String
    title: String
    viewer_count: Int
    started_at: String
    language: String
    thumbnail_url: String
    tag_ids: [String]
  }
`;

export default stream;
