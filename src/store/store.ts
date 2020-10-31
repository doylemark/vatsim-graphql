import fetch from "node-fetch";
import * as sentry from "@sentry/node";


import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";
import Stream from "../types/stream";
import getStreams from "../data/twitch";
import Event, { EventCollection } from "../types/event";

import events from "./events";
import pilots from "./pilots";
import Prefile from "../types/prefile";

export interface Store {
  prefiles: Prefile[];
  pilots: Pilot[];
  controllers: Controller[];
  streams: Stream[];
  events: EventCollection[];
}

const store: Store = {
  prefiles: [],
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
    store.prefiles = data.prefiles;
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
