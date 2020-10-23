import monk from "monk";

import Airport from "../types/airport";

const URL = "localhost:27017/airports";

export const db = monk(URL);
export const airports = db.get("all");

export const getAirport = async (icao: string) => {
  const airport: Airport | undefined = await airports.findOne({ icao });
  return airport;
};
