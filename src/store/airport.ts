import { getAirport } from "../db/db";
import Airport from "../types/airport";
import { RawPilot } from "../types/pilot";
import Prefile from "../types/prefile";

const airports = async ({ flight_plan: target }: RawPilot | Prefile) => {
  let departureAirport: Airport| undefined;
  let arrivalAirport: Airport| undefined;

  if (target?.departure) {
    departureAirport = await getAirport(target.departure);
  }
  if (target?.arrival) {
    arrivalAirport = await getAirport(target.arrival);
  }

  return { departureAirport, arrivalAirport };
};

export default airports;
