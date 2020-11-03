import getMetar from "../data/weather/metar";
import getAirport from "../db";
import store from "../store";
import { SingleAirport } from "../types/airport";

const findArrivalsDepartures = (icao: string) => {
  const arrivals = store.pilots.filter((pilot) => pilot.flight_plan?.arrival === icao);
  const departures = store.pilots.filter((pilot) => pilot.flight_plan?.departure === icao);

  return [arrivals, departures];
};

const findControllers = (icao: string) => store.controllers.filter((controller) =>
  controller.callsign.includes(icao) || controller.callsign.includes(icao.slice(1, 4)));

const airport = async (_: null, {
  icao,
}: { icao: string }): Promise<SingleAirport | undefined> => {
  const airportData = await getAirport(icao);
  if (airportData) {
    const [arrivals, departures] = findArrivalsDepartures(icao);

    const controllers = findControllers(icao);

    const metar = await getMetar(icao);

    return {
      ...airportData,
      data: {
        arrivals,
        departures,
        controllers,
        metar,
      },
    };
  }

  return undefined;
};

export default airport;
