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
    data: OnlineAirportData
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
    data: OnlineSingleAirportData
  }

  type OnlineAirportData {
    departures: [Pilot]
    arrivals: [Pilot]
    controllers: [Controller]
  }

  type OnlineSingleAirportData {
    departures: [Pilot]
    arrivals: [Pilot]
    controllers: [Controller]
    metar: Metar
  }
`;

export default airport;
