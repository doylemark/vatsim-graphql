import Controller from "./controller";
import Metar from "./metar";
import { Pilot } from "./pilot";

export default interface Airport {
  icao: string;
  iata: string | null;
  name: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  elevation: number | null;
  lat: number | null;
  lon: number | null;
  tz: string | null;
}

export interface SingleAirport extends Airport {
  data: {
    departures: Pilot[];
    arrivals: Pilot[];
    controllers: Controller[];
    metar: Metar | null;
  }
}

export interface AllAirport extends Airport {
  data: {
    departures: Pilot[];
    arrivals: Pilot[];
    controllers: Controller[];
  }
}
