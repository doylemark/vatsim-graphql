import fetch from "node-fetch";
import * as sentry from "@sentry/node";

import ApiResponse from "../types/api";
import { Pilot } from "../types/pilot";
import Controller from "../types/controller";
import Stream from "../types/stream";
import getStreams from "../data/twitch";
import { EventCollection } from "../types/event";
import Prefile from "../types/prefile";
import { AllAirport } from "../types/airport";
import History from "../types/history";
import history from "../db/history";

import pilots from "./pilots";
import events from "./events";
import airports from "./airports";

export interface Store {
  prefiles: Prefile[];
  pilots: Pilot[];
  controllers: Controller[];
  streams: Stream[];
  events: EventCollection[];
  airports: AllAirport[];
  history: History[];
}

const store: Store = {
  prefiles: [],
  pilots: [],
  controllers: [],
  streams: [],
  events: [],
  airports: [],
  history: [],
};

const updateVolatileData = async () => {
  try {
    const response = await fetch(
      "http://cluster.data.vatsim.net/v3/vatsim-data.json",
    );
    const data: ApiResponse = await response.json();
    store.prefiles = data.prefiles;
    store.pilots = pilots(data.pilots);
    store.controllers = [...data.controllers, ...data.atis];
    store.airports = await airports([...data.controllers, ...data.atis], store.pilots);
    store.streams = await getStreams();
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating Store", error);
  }
};

const updateData = async () => {
  try {
    store.events = await events();
    store.history = await history(store.pilots, store.controllers);
  } catch (error) {
    sentry.captureException(error);
    console.log("Error updating non-volatile store data");
  }
};

(() => {
  updateData();
  updateVolatileData();

  setInterval(async () => updateVolatileData(), 60000); // 1min
  setInterval(async () => updateData(), 300000); // 5mins
})();

export default store;
