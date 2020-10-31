import { gql } from "apollo-server-express";

const airport = gql`
  type Airport {
    icao: String
    iata: String
    name: String
    city: String
    state: String
    country: String
    elevation: Int
    lat: Float
    lon: Float
    tz: String
  }

  type SingleAirport {
    icao: String
    iata: String
    name: String
    city: String
    state: String
    country: String
    elevation: Int
    lat: Float
    lon: Float
    tz: String
  }

  type OnlineAirportData {
    departures: [String]
    arrivals: [String]
  }

  type OnlineSingleAirportData {
    departures: [String]
    arrivals: [String]
    metar: Metar
  }
`;

export default airport;
