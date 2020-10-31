export default interface Controller {
  cid: number;
  name?: string | null;
  callsign: string;
  frequency: string;
  facility: number;
  rating: number;
  server: string;
  visual_range?: number | null;
  text_atis?: string | null;
  last_updated: string;
  logon_time: string;
}
