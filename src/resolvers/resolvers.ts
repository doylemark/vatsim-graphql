import store from "../store";
import Controller from "../types/controller";
import FlightPlan from "../types/flightplan";
import Pilot from "../types/pilot";

import findAll from "./findAll";
import findOne from "./findOne";

interface Args {
  callsign: string;
}

export const flightplans = () => findAll("flightplans");
export const pilots = () => findAll("pilots");
export const controllers = () => findAll("controllers");
export const streams = () => findAll("streams");
export const events = () => findAll("events");

export const flightplan = (_: null, {
  callsign,
}: Args) => findOne<FlightPlan>(store.flightplans, callsign);
export const pilot = (_: null, {
  callsign,
}: Args) => findOne<Pilot>(store.pilots, callsign);
export const controller = (_: null, {
  callsign,
}: Args) => findOne<Controller>(store.controllers, callsign);
