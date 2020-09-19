import store, { Store } from "../store";

const findAll = (type: keyof Store) => {
  if (store[type]) {
    return store[type];
  }
  console.log("found");
  return [];
};

export default findAll;
