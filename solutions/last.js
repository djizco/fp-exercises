/*

Returns the last element of a list.

*/

import { dec } from '.';

export default function last(list) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  return list[dec(list.length)];
}
