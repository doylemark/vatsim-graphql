import FlightPlan from "./flightplan";

export default interface Prefile {
  cid: number;
  name: string;
  callsign: string;
  flight_plan: FlightPlan;
  last_updated: string;
}
