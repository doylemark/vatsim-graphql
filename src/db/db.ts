import monk from "monk";
import * as dotenv from "dotenv";

import Airport from "../types/airport";

dotenv.config();

export const db = monk(process.env.MONGO_URL || "");
export const airports = db.get("airports");

export const getAirport = async (_: null, {
  icao,
}: { icao:string }) => {
  const airport: Airport | undefined = await airports.findOne({ icao });
  return airport;
};
