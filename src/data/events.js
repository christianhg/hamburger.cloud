import { format } from 'date-fns';

const uuidv5 = require('uuid/v5');

export const events = sortEvents(require('../data/events.json')).map(
  createEvent
);

function createEvent({ date, title }) {
  return {
    date: format(date, 'MMMM, YYYY'),
    id: uuidv5(`${date}-${title}`, 'a7c1869b-34aa-4244-b2e2-db7c2b43c09b'),
    title,
  };
}

function sortEvents(events) {
  return [...events].sort(
    (eventA, eventB) =>
      new Date(eventB.date).getTime() - new Date(eventA.date).getTime()
  );
}
