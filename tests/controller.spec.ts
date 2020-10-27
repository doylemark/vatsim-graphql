import { gql } from "apollo-server-express";
import fetch from "node-fetch";

import Airport from "../src/types/airport";
import ApiResponse from "../src/types/api";
import Atis from "../src/types/atis";

import graphQlClient from "./client";

interface AtisQueryResponse {
  atiservice: Atis;
}

const findOnlineAtis = async () => {
  const response = await fetch(
    "http://cluster.data.vatsim.net/v3/vatsim-data.json",
  );
  const { atis }: ApiResponse = await response.json();

  const onlineAtis = atis.find((station) => station.callsign.endsWith("ATIS"));
  return onlineAtis?.callsign;
};

const getAtis = async () => {
  const onlineAtis = await findOnlineAtis();

  if (!onlineAtis) {
    fail("Could not find an online ATIS to test with");
  }

  const { data: { atiservice } } = await graphQlClient.query<AtisQueryResponse>(
    {
      query: gql`
        query Atis($callsign: String!) {
          atiservice(callsign: $callsign) {
            cid
            name
            callsign
            frequency
            facility
            rating
            server
            visual_range
            text_atis
            last_updated
            logon_time
          }
        }
    `,
      variables: {
        callsign: onlineAtis,
      },
    },

  );
  return atiservice;
};

describe("ATIS", () => {
  let atis: Atis;

  beforeAll(async () => {
    const a = await getAtis();
    atis = a;
  });

  it("Should find and return an ATIS", () => {
    expect(atis).toBeDefined();
  });

  it("Should have the correct amount of null values", () => {
    const numberOfNullishValues = Object.values(atis).filter((val) => val === null).length;
    const numberOfDefinedValues = Object.values(atis).filter((val) => val !== null).length;
    expect(numberOfNullishValues).toBe(3);
    expect(numberOfDefinedValues).toBe(9);
  });
});
