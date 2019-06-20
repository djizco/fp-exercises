/*

Take the difference between one array and one or more arrays.
Only the elements present in just the first array will remain.

*/

import { each, equals } from '.';

export default function difference(array, ...arrays) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }

  if (arrays.length < 1) {
    throw new Error('must provide at least two arrays');
  }

  const diff = [];

  each(array, val1 => {
    let unique = true;

    each(arrays, arr => {
      if (!Array.isArray(arr)) {
        throw new Error('every argument must be an array');
      }

      each(arr, val2 => {
        if (equals(val1, val2)) {
          unique = false;
        }
      });
    });

    if (unique) {
      diff.push(val1);
    }
  });

  return diff;
}
