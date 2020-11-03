/* eslint-disable no-await-in-loop */
import getAirport from "../db";
import { getAirportByIata } from "../db/db";
import { AllAirport } from "../types/airport";
import Controller from "../types/controller";
import Pilot from "../types/pilot";

const findArrivalsDepartures = (icao: string, pilots: Pilot[]) => {
  const arrivals = pilots.filter((pilot) => pilot.flight_plan?.arrival === icao);
  const departures = pilots.filter((pilot) => pilot.flight_plan?.departure === icao);

  return [arrivals, departures];
};

const findAirports = async (controllers: Controller[], pilots: Pilot[]): Promise<AllAirport[]> => {
  const airports: AllAirport[] = [];

  for (const controller of controllers) {
    const station = controller.callsign.split("_")[0];
    const airport = station.length === 4
      ? await getAirport(station) : await getAirportByIata(station);

    if (airport) {
      const repeatedAirport = airports.find((ap) => ap.icao === airport.icao);

      if (!repeatedAirport) {
        const airportsControllers = controllers.filter((ctrl) => {
          const split = ctrl.callsign.split("_")[0];

          return split === airport.icao || split === airport.iata;
        });

        const [arrivals, departures] = findArrivalsDepartures(airport.icao, pilots);

        airports.push({
          ...airport,
          data: {
            arrivals,
            departures,
            controllers: airportsControllers,
          },
        });
      }
    }
  }

  return airports;
};

export default findAirports;
