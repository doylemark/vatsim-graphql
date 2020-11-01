import getAirport from "../db";
import { AllAirport } from "../types/airport";
import Controller from "../types/controller";
import Pilot from "../types/pilot";

const findArrivalsDepartures = (icao: string, pilots: Pilot[]) => {
  const arrivals = pilots.filter((pilot) => pilot.flight_plan?.arrival === icao);
  const departures = pilots.filter((pilot) => pilot.flight_plan?.departure === icao);

  return [arrivals, departures];
};

const findControllers = (icao: string, controllers: Controller[]) =>
  controllers.filter((controller) =>
    controller.callsign.includes(icao) || controller.callsign.includes(icao.slice(1, 4)));

const findAirports = async (controllers: Controller[], pilots: Pilot[]) => {
  const airports = await Promise.all(
    controllers.map(async ({ callsign }): Promise<AllAirport> => {
      let icao = callsign.split("_")[0];
      if (callsign.split("_")[0].length === 3) {
        icao = `K${callsign.split("_")[0]}`;
      }

      // eslint-disable-next-line no-await-in-loop
      const airport = await getAirport(icao);
      const [arrivals, departures] = findArrivalsDepartures(icao, pilots);

      const onlineControllers = findControllers(icao, controllers);

      return {
        ...airport,
        data: {
          arrivals,
          departures,
          controllers: onlineControllers,
        },
      };
    }),
  );

  return airports;
};

export default findAirports;
