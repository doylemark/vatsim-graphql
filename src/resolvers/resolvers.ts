import store from "../store";
import Controller from "../types/controller";
import Pilot from "../types/pilot";
import Prefile from "../types/prefile";

import findAll from "./findAll";
import findOne from "./findOne";

interface Args {
  callsign: string;
}

export const prefiles = () => findAll("prefiles");
export const pilots = () => findAll("pilots");
export const controllers = () => findAll("controllers");
export const streams = () => findAll("streams");
export const events = () => findAll("events");

export const prefile = (_: null, {
  callsign,
}: Args) => findOne<Prefile>(store.prefiles, callsign);
export const pilot = (_: null, {
  callsign,
}: Args) => findOne<Pilot>(store.pilots, callsign);
export const controller = (_: null, {
  callsign,
}: Args) => findOne<Controller>(store.controllers, callsign);
