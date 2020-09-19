import fetch from "node-fetch";

import FlightPlan from "../types/flightplan";
import ApiResponse from "../types/api";
import Pilot from "../types/pilot";
import Controller from "../types/controller";

import flightplans from "./flightplans";

export interface Store {
  flightplans: FlightPlan[];
  pilots: Pilot[];
  controllers: Controller[];
}

const store: Store = {
  flightplans: [],
  pilots: [],
  controllers: [],
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
  } catch (error) {
    console.log(error);
  }
})();

export default store;
