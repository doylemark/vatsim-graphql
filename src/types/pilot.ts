import FlightPlan, { RawFlightPlan } from "./flightplan";

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
  flight_plan: FlightPlan;
  logon_time: string;
  last_updated: string;
}

export type RawPilot = Omit<Pilot, "flight_plan"> & {flight_plan: RawFlightPlan};
