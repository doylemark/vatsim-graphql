import store from "../store";
import Atis from "../types/atis";
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
export const atiservices = () => findAll("atis");

export const flightplan = (_: null, {
  callsign,
}: Args) => findOne<FlightPlan>(store.flightplans, callsign);
export const pilot = (_: null, {
  callsign,
}: Args) => findOne<Pilot>(store.pilots, callsign);
export const controller = (_: null, {
  callsign,
}: Args) => findOne<Controller>(store.controllers, callsign);
export const atiservice = (_: null, {
  callsign,
}: Args) => findOne<Atis>(store.atis, callsign);
