import Event, { EventCollection } from "../types/event";

const events = (evs: Event[]) => {
  const filtered: EventCollection[] = [];

  for (const event of evs) {
    const dateExists = filtered.findIndex((ev) => {
      const existingCollectionDate = ev.date.slice(0, 10);
      const eventDate = event.start_time.slice(0, 10);

      return existingCollectionDate === eventDate;
    });

    if (dateExists < 0) {
      filtered.push({ date: event.start_time.slice(0, 10), events: [event] });
    } else {
      filtered[dateExists].events.push(event);
    }
  }

  return filtered;
};

export default events;
