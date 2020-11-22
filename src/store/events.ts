import fetch from "node-fetch";

import Event, { EventCollection } from "../types/event";

interface EventsResponse {
  data: Event[];
}

const events = async () => {
  try {
    const filtered: EventCollection[] = [];
    const response = await fetch("https://my.vatsim.net/api/events/all");
    const { data }: EventsResponse = await response.json();

    for (const event of data) {
      const dateExists = filtered.findIndex((ev) => {
        const existingCollectionDate = ev.date.slice(0, 10);
        const eventDate = event.start_time.slice(0, 10);

        return existingCollectionDate === eventDate;
      });

      if (dateExists < 0) {
        filtered.push({ date: event.start_time.slice(0, 10), data: [event] });
      } else {
        filtered[dateExists].data.push(event);
      }
    }
    return filtered;
  } catch (error) {
    throw new Error(error);
  }
};

export default events;
