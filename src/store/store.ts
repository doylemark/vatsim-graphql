import fetch from "node-fetch";
import * as sentry from "@sentry/node";

import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";
import Stream from "../types/stream";
import getStreams from "../data/twitch";
import Event, { EventCollection } from "../types/event";
import Prefile from "../types/prefile";
import { AllAirport } from "../types/airport";

import events from "./events";
import airports from "./airports";

export interface Store {
  prefiles: Prefile[];
  pilots: Pilot[];
  controllers: Controller[];
  streams: Stream[];
  events: EventCollection[];
  airports: AllAirport [];
}

const store: Store = {
  prefiles: [],
  pilots: [],
  controllers: [],
  streams: [],
  events: [],
  airports: [],
};

const updateVolatileData = async () => {
  try {
    const response = await fetch(
      "http://cluster.data.vatsim.net/v3/vatsim-data.json",
    );
    const data: ApiResponse = await response.json();
    store.prefiles = data.prefiles;
    store.pilots = data.pilots;
    store.controllers = [...data.controllers, ...data.atis];
    store.streams = await getStreams();
    store.airports = await airports([...data.controllers, ...data.atis], data.pilots);
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating Store", error);
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
