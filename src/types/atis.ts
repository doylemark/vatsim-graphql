import Controller from "./controller";

type Atis = Omit<Controller, "name" | "rating">;

export default Atis;
