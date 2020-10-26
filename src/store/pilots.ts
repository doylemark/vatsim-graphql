import ApiResponse from "../types/api";
import Pilot from "../types/pilot";

const pilots = (data: ApiResponse): Pilot[] => {
  const result = data.pilots.map((pilot) => ({
    ...pilot,
    flight_plan: {
      ...pilot.flight_plan,
      callsign: pilot.callsign,
      isPrefile: false,
    },
  }));

  return result;
};

export default pilots;
