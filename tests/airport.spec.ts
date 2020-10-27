import { gql } from "apollo-server-express";

import Airport from "../src/types/airport";

import graphQlClient from "./client";

const query = gql`
  query {
    airport(icao: "EIDW") {
      icao
      iata
      name
      city
      state
      country
      elevation
      lat
      lon
      tz
    }
  }
`;

interface AirportQueryResponse {
  airport: Airport;
}

const getAirport = async () => {
  const { data: { airport } } = await graphQlClient.query<AirportQueryResponse>({ query });
  return airport;
};

describe("Airport", () => {
  let airport: Airport;

  beforeAll(async () => {
    const a = await getAirport();
    airport = a;
  });

  it("Should find a known airport an return all values as defined", async () => {
    const allValuesDefined = Object.values(airport).every((val) => val !== undefined);
    expect(allValuesDefined).toBeTruthy();
  });
});
