import Atis from "./atis";
import Controller from "./controller";
import { RawPilot } from "./pilot";
import Prefile from "./prefile";

export default interface ApiResponse {
  pilots: RawPilot[];
  controllers: Controller[];
  atis: Controller[];
  prefiles: Prefile[];
}
