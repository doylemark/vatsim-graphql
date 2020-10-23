import { gql } from "apollo-server-express";

const flightplan = gql`
  type Flightplan {
    flight_rules: String
    aircraft: String
    departure: String
    departureAirport: Airport
    arrival: String
    arrivalAirport: Airport
    alternate: String
    cruise_tas: String
    altitude: String
    deptime: String
    enroute_time: String
    fuel_time: String
    remarks: String
    route: String
    isPrefile: Boolean!
    callsign: String
  }
`;

export default flightplan;
