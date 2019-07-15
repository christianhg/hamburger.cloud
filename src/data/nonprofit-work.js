import { format } from 'date-fns';
import { sortData } from './util.js';

const uuidv5 = require('uuid/v5');

export const work = sortData(require('../data/nonprofit-work.json')).map(
  createWork
);

function createWork({ place, info, start, end }) {
  return {
    id: uuidv5(`${start}-${place}`, 'a7c1869b-34aa-4244-b2e2-db7c2b43c09b'),
    place,
    info,
    start: format(start, 'YYYY'),
    end: end ? format(end, 'YYYY') : undefined,
  };
}
