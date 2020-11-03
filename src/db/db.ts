import monk from "monk";
import * as dotenv from "dotenv";

import Airport from "../types/airport";

dotenv.config();

export const db = monk(process.env.MONGO_URL || "");
export const airports = db.get("airports");

export const getAirport = async (icao: string): Promise<Airport | undefined> => {
  const airport: Airport | undefined = await airports.findOne({ icao });

  if (!airport) {
    return undefined;
  }

  return airport;
};

export const getAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  const airport: Airport | undefined = await airports.findOne({ iata });

  if (!airport) {
    return undefined;
  }

  return airport;
};
