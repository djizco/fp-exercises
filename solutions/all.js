/*

Determine whether all of the elements match a truth test.
If a predicate is not provided, use an identity function.

*/

import { identity, reduce } from '.';

export default function all(array, predicate = identity) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }

  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }

  return reduce(array, (start, val) => {
    if (!start) {
      return false;
    }
    return !!predicate(val);
  }, true);
}
