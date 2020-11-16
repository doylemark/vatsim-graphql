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
    departures: [Pilot]
    arrivals: [Pilot]
    controllers: [Controller]
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
    departures: [Pilot]
    arrivals: [Pilot]
    controllers: [Controller]
    metar: Metar
  }
`;

export default airport;
