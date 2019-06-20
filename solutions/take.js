/*

Returns the first n elements of the given list.

*/

import { slice } from '.';

export default function take(list, n) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  if (typeof n === 'number' && n < 0) {
    n = list.length;
  }

  return slice(list, 0, n);
}
