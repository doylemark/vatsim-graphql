import Flightplan from "./flightplan";

export default interface Prefile {
  cid: number;
  name: string;
  callsign: string;
  flight_plan: Flightplan;
  last_updated: string;
}
