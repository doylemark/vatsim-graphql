import fetch from "node-fetch";

import FlightPlan from "../types/flightplan";
import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";
import Atis from "../types/atis";

import flightplans from "./flightplans";

export interface Store {
  flightplans: FlightPlan[];
  pilots: Pilot[];
  controllers: Controller[];
  atis: Atis[];
}

const store: Store = {
  flightplans: [],
  pilots: [],
  controllers: [],
  atis: [],
};

(async () => {
  try {
    const response = await fetch(
      "http://cluster.data.vatsim.net/v3/vatsim-data.json",
    );
    const data: ApiResponse = await response.json();
    store.flightplans = flightplans(data);
    store.pilots = data.pilots;
    store.controllers = data.controllers;
    store.atis = data.atis;
  } catch (error) {
    console.log(error);
  }
})();

export default store;
