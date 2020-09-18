export default interface FlightPlan {
  callsign: string;
  flight_rules: string;
  aircraft: string;
  departure: string;
  arrival: string;
  alternate: string;
  cruise_tas: string;
  altitude: string;
  deptime: string;
  enroute_time: string;
  fuel_time: string;
  remarks: string;
  route: string;
  isPrefile?: boolean;
}
