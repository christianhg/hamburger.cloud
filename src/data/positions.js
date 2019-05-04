import { format } from 'date-fns';

const uuidv5 = require('uuid/v5');

export const positions = sortPositions(require('../data/positions.json')).map(
  createPosition
);

function createPosition({ title, company, start, end }) {
  return {
    id: uuidv5(`${start}-${title}`, 'a7c1869b-34aa-4244-b2e2-db7c2b43c09b'),
    title,
    company,
    start: format(start, 'MMMM, YYYY'),
    end: end ? format(end, 'MMMM, YYYY') : undefined,
  };
}

function sortPositions(positions) {
  return [...positions].sort(
    (positionA, positionB) =>
      new Date(positionB.start).getTime() - new Date(positionA.start).getTime()
  );
}
