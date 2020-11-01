import monk from "monk";
import * as dotenv from "dotenv";

import Airport from "../types/airport";

dotenv.config();

export const db = monk(process.env.MONGO_URL || "");
export const airports = db.get("airports");

export const getAirport = async (icao: string): Promise<Airport> => {
  const airport: Airport | undefined = await airports.findOne({ icao });

  if (!airport) {
    return {
      icao: null,
      iata: null,
      name: null,
      city: null,
      state: null,
      country: null,
      elevation: null,
      lat: null,
      lon: null,
      tz: null,
    };
  }

  return airport;
};
