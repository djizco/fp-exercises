/*

Drops the first n elements of the given list.

*/

import { slice } from '.';

export default function drop(list, n) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  if (typeof n === 'number' && n < 0) {
    n = 0;
  }
  return slice(list, n, list.length);
}
