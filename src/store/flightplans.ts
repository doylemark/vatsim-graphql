import ApiResponse from "../types/api";

const flightplans = (data: ApiResponse) => {
  const prefiles = data.prefiles.map((prefile) => ({
    ...prefile.flight_plan,
    callsign: prefile.callsign,
    isPrefile: true,
  }));

  const pilotPlans = data.pilots.map((pilot) => ({
    ...pilot.flight_plan,
    callsign: pilot.callsign,
    isPrefile: false,
  }));

  return [...prefiles, ...pilotPlans];
};

export default flightplans;
