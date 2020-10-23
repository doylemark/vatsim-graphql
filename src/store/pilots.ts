import ApiResponse from "../types/api";
import Pilot from "../types/pilot";

import airports from "./airport";

const pilots = async (data: ApiResponse): Promise<Pilot[]> => {
  const result = await Promise.all(data.pilots.map(async (pilot) => {
    const { departureAirport, arrivalAirport } = await airports(pilot);
    return {
      ...pilot,
      flight_plan: {
        ...pilot.flight_plan,
        departureAirport,
        arrivalAirport,
        callsign: pilot.callsign,
        isPrefile: false,
      },
    };
  }));

  return result;
};

export default pilots;
