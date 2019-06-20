/*

Returns true if no elements of the list match the predicate.

*/

import { identity, any } from '.';

export default function none(array, predicate = identity) {
  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }

  return !any(array, predicate);
}
