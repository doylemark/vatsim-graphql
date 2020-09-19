import store, { Store } from "../store";

const findAll = (type: keyof Store) => {
  if (store[type]) {
    return store[type];
  }
  return [];
};

export default findAll;
