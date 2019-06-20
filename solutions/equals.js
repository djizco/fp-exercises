/*

Returns true if its arguments are equivalent, false otherwise.
For arrays and objects, it should do a shallow equality
for each property or item in each collection.

Challenge: for the challenging version, you will need to do a deep
equality on objects and arrays.  This will require recursion. You
will also need to handle cyclical objects.

*/

import { keys, reduce } from '.';

export default function equals(valA, valB) {
  if (Array.isArray(valA) && Array.isArray(valB)) {
    if (valA.length !== valB.length) {
      return false;
    }

    return reduce(valA, (acc, val, i) => {
      if (acc === false) {
        return false;
      }

      return equals(val, valB[i]);
    }, true);
  }

  if (
    valA instanceof Object
    && valB instanceof Object
    && !Array.isArray(valA)
    && !Array.isArray(valB)
  ) {
    let equality = true;

    if (keys(valA).length !== keys(valB).length) {
      equality = false;
    }

    for (const key in valA) {
      if (
        valA === valA[key]
        || valB === valB[key]
        || valA === valB[key]
        || valB === valA[key]
      ) {
        if (valA !== valA[key] || valB !== valB[key]) {
          equality = false;
        }
      }

      else if (!equals(valA[key], valB[key])) {
        equality = false;
      }
    }

    return equality;
  }

  return valA === valB;
}
