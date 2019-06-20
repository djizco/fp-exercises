/*

Returns the last n elements of the given list.

*/

import { subtract, slice } from '.';

export default function takeLast(list, n) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  if (typeof n === 'number' && (n < 0 || n > list.length)) {
    n = list.length;
  }

  return slice(list, subtract(list.length, n), list.length);
}
