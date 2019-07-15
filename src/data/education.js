import { format } from 'date-fns';
import { sortData } from './util';

const uuidv5 = require('uuid/v5');

export const education = sortData(require('../data/education.json')).map(
  createEducation
);

function createEducation({ title, place, link, grades, start, end }) {
  return {
    id: uuidv5(`${start}-${title}`, 'a7c1869b-34aa-4244-b2e2-db7c2b43c09b'),
    title,
    place,
    link,
    grades,
    start: format(start, 'YYYY'),
    end: end ? format(end, 'YYYY') : undefined,
  };
}
