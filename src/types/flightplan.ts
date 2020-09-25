import Airport from "./airport";

export default interface FlightPlan {
  flight_rules: string;
  aircraft: string;
  departure: string;
  departureAirport: Airport | undefined;
  arrival: string;
  arrivalAirport: Airport | undefined
  alternate: string;
  cruise_tas: string;
  altitude: string;
  deptime: string;
  enroute_time: string;
  fuel_time: string;
  remarks: string;
  route: string;
  isPrefile: boolean;
  callsign: string;
}

export type RawFlightPlan = Omit<FlightPlan, "isPrefile" | "callsign" | "departureAirport" | "arrivalAirport">;
