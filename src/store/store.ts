import fetch from "node-fetch";
import * as sentry from "@sentry/node";

import FlightPlan from "../types/flightplan";
import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";
import Stream from "../types/stream";
import getStreams from "../twitch";
import Event, { EventCollection } from "../types/event";

import events from "./events";
import flightplans from "./flightplans";
import pilots from "./pilots";

export interface Store {
  flightplans: FlightPlan[];
  pilots: Pilot[];
  controllers: Controller[];
  streams: Stream[];
  events: EventCollection[];
}

const store: Store = {
  flightplans: [],
  pilots: [],
  controllers: [],
  streams: [],
  events: [],
};

const updateVolatileData = async () => {
  try {
    const response = await fetch(
      "http://cluster.data.vatsim.net/v3/vatsim-data.json",
    );
    const data: ApiResponse = await response.json();
    store.flightplans = flightplans(data);
    store.pilots = pilots(data);
    store.controllers = [...data.controllers, ...data.atis];
    store.streams = await getStreams();
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating Store");
  }
};

interface EventsResponse {
  data: Event[];
}

const updateData = async () => {
  try {
    const response = await fetch("https://my.vatsim.net/api/events/all");
    const { data }: EventsResponse = await response.json();
    store.events = events(data);
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating Events");
  }
};

(() => {
  updateData();
  updateVolatileData();

  setInterval(async () => updateVolatileData(), 10000);
  setInterval(async () => updateData(), 60000);
})();

export default store;
