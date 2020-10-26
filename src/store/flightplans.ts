import ApiResponse from "../types/api";
import FlightPlan from "../types/flightplan";

const flightplans = (data: ApiResponse): FlightPlan[] => {
  const pilotPlans = data.pilots.map((pilot) => ({
    ...pilot.flight_plan,
    callsign: pilot.callsign,
    isPrefile: false,
  }));

  const prefiles = data.prefiles.map((prefile) => ({
    ...prefile.flight_plan,
    callsign: prefile.callsign,
    isPrefile: true,
  }));

  return [...pilotPlans, ...prefiles];
};

export default flightplans;
