/*

Drops the last n elements of the given list.

*/

import { subtract, slice } from '.';

export default function dropLast(list, n) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  if (typeof n === 'number' && n < 0) {
    n = 0;
  }

  if (typeof n === 'number' && n > list.length) {
    n = list.length;
  }

  return slice(list, 0, subtract(list.length, n));
}
