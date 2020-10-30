export default interface Event {
  id: number;
  type: string;
  vso_name?: string;
  name: string;
  link: string;
  division: string;
  region: string;
  start_time: string;
  end_time: string;
  short_description: string;
  description: string;
  banner: string;
}

export interface EventCollection {
  date: string;
  data: Event[];
}
