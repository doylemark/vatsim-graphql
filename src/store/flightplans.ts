import ApiResponse from "../types/api";
import FlightPlan from "../types/flightplan";

import airports from "./airport";

const flightplans = async (data: ApiResponse): Promise<FlightPlan[]> => {
  const pilotPlans = await Promise.all(
    data.pilots.map(async (pilot) => {
      const { departureAirport, arrivalAirport } = await airports(pilot);

      return {
        ...pilot.flight_plan,
        callsign: pilot.callsign,
        isPrefile: false,
        departureAirport,
        arrivalAirport,
      };
    }),
  );

  const prefiles = await Promise.all(
    data.prefiles.map(async (prefile) => {
      const { departureAirport, arrivalAirport } = await airports(prefile);

      return {
        ...prefile.flight_plan,
        callsign: prefile.callsign,
        isPrefile: true,
        departureAirport,
        arrivalAirport,
      };
    }),
  );

  return [...pilotPlans, ...prefiles];
};

export default flightplans;
