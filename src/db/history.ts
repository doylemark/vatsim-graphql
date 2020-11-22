import Controller from "../types/controller";
import History from "../types/history";
import { Pilot } from "../types/pilot";

import { history } from "./db";

export const setHistory = async (pilots: Pilot[], controllers: Controller[]) => {
  const d = new Date().getSeconds() - 60 * 60 * 24; // 24hours ago
  const doc: History = {
    date: new Date().getTime().toString(),
    controller_connections: controllers.length,
    pilot_connections: pilots.length,
    total_connections: pilots.length + controllers.length,
  };

  try {
    await history.remove({ date: { $lt: d } });
    await history.insert(doc);
  } catch (error) {
    throw new Error(error);
  }
};

export const getHistory = async () => {
  const h = await history.find({});
  return h as unknown as History[];
};

const h = async (pilots: Pilot[], controllers: Controller[]) => {
  await setHistory(pilots, controllers);
  return getHistory();
};

export default h;
