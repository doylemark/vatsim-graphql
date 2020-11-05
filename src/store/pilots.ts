import RawPilot, { Pilot } from "../types/pilot";

const processPilots = (pilots: RawPilot[]): Pilot[] =>
  pilots.map((pilot) => ({ ...pilot, lat: pilot.latitude, lon: pilot.longitude }));

export default processPilots;
