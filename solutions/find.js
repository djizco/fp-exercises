/*

Returns the first element of the list which matches
the predicate, or undefined if no element matches.

*/

import { each } from '.';

export default function find(array, predicate) {
  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }
  let found;
  each(array, val => {
    if (found === undefined && predicate(val)) {
      found = val;
    }
  });
  return found;
}
