import { format } from 'date-fns';
import { sortData } from './util.js';

const uuidv5 = require('uuid/v5');

export const positions = sortData(require('../data/positions.json')).map(
  createPosition
);

function createPosition({ title, company, link, start, end }) {
  return {
    id: uuidv5(`${start}-${title}`, 'a7c1869b-34aa-4244-b2e2-db7c2b43c09b'),
    title,
    company,
    link,
    start: format(start, 'MMMM, YYYY'),
    end: end ? format(end, 'MMMM, YYYY') : undefined,
  };
}
