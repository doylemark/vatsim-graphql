import { RawFlightPlan } from "./flightplan";

export default interface Prefile {
  cid: number;
  name: string;
  callsign: string;
  flight_plan: RawFlightPlan;
  last_updated: string;
}
