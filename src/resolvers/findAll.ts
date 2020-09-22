import store, { Store } from "../store";

const findAll = (type: keyof Store) => (store[type] ? store[type] : []);

export default findAll;
