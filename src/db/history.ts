import Controller from "../types/controller";
import History from "../types/history";
import { Pilot } from "../types/pilot";

import { history } from "./db";

export const setHistory = async (pilots: Pilot[], controllers: Controller[]) => {
  const currentDate = new Date().toUTCString();
  const expireDate = new Date().setDate(new Date().getDate() - 1); // 24 hours ago

  if (pilots.length === 0 || controllers.length === 0) {
    return;
  }

  const doc: History = {
    date: currentDate,
    controller_connections: controllers.length,
    pilot_connections: pilots.length,
    total_connections: pilots.length + controllers.length,
  };

  try {
    await history.remove({ date: { $lt: expireDate } });
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
