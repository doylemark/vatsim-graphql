import { gql } from "apollo-server-express";
import fetch from "node-fetch";

import ApiResponse from "../src/types/api";
import Controller from "../src/types/controller";

import graphQlClient from "./client";

interface AtisQueryResponse {
  controller: Controller;
}

const findOnlineController = async () => {
  const response = await fetch(
    "http://cluster.data.vatsim.net/v3/vatsim-data.json",
  );
  const { controllers }: ApiResponse = await response.json();

  return controllers.find(({ callsign }) => callsign.endsWith("TWR"));
};

const getController = async () => {
  const controller = await findOnlineController();

  if (!controller) {
    fail("Could not find an online ATIS to test with");
  }

  const { data } = await graphQlClient.query<AtisQueryResponse>(
    {
      query: gql`
        query Controller($callsign: String!) {
          controller(callsign: $callsign) {
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
        callsign: controller.callsign,
      },
    },

  );
  return data.controller;
};

describe("Controller", () => {
  let controller: Controller;

  beforeAll(async () => {
    controller = await getController();
  });

  it("Should find and return an ATIS", () => {
    expect(controller).toBeDefined();
  });

  it("Should have the correct amount of null values", () => {
    const numberOfNullishValues = Object.values(controller).filter((val) => val === null).length;
    const numberOfDefinedValues = Object.values(controller).filter((val) => val !== null).length;
    expect(numberOfNullishValues).toBe(1);
    expect(numberOfDefinedValues).toBe(11);
  });
});
