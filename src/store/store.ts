import fetch from "node-fetch";
import * as sentry from "@sentry/node";

import FlightPlan from "../types/flightplan";
import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";
import Atis from "../types/atis";
import Stream from "../types/stream";
import getStreams from "../twitch";

import flightplans from "./flightplans";
import pilots from "./pilots";

export interface Store {
  flightplans: FlightPlan[];
  pilots: Pilot[];
  controllers: Controller[];
  atis: Atis[];
  streams: Stream[];
}

const store: Store = {
  flightplans: [],
  pilots: [],
  controllers: [],
  atis: [],
  streams: [],
};

const updateData = async () => {
  try {
    const response = await fetch(
      "http://cluster.data.vatsim.net/v3/vatsim-data.json",
    );
    const data: ApiResponse = await response.json();
    store.flightplans = flightplans(data);
    store.pilots = pilots(data);
    store.controllers = data.controllers;
    store.atis = data.atis;
    store.streams = await getStreams();
    console.log("Updated Store");
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating Store");
  }
};

(() => {
  updateData();
  setInterval(async () => updateData(), 10000);
})();

export default store;
