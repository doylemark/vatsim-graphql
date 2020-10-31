import Flightplan from "./flightplan";

export default interface Pilot {
  cid: number;
  name: string;
  callsign: string;
  server: string;
  latitude: number;
  longitude: number;
  altitude: number;
  groundspeed: number;
  transponder: number;
  heading: number;
  qnh_i_hg: number;
  qnh_mb: number;
  flight_plan: Flightplan;
  logon_time: string;
  last_updated: string;
}
