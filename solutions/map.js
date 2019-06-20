/*

Return the results of applying an iterator to each element.
Works on objects and arrays.

Note: 'map' is a useful iterative function that works a lot
like 'each', but in addition to running the operation on all
the members, it returns a new mapped version of the input.

*/

import { each } from '.';

export default function map(collection, iterator) {
  if (typeof iterator !== 'function') {
    throw new Error('iterator must be a function');
  }
  if (Array.isArray(collection)) {
    const mapped = [];
    each(collection, val => mapped.push(iterator(val)));
    return mapped;
  }
  if (collection instanceof Object) {
    const mapped = {};
    each(collection, (val, key) => { mapped[key] = iterator(val); });
    return mapped;
  }
  throw new Error('must provide an array or object');
}
