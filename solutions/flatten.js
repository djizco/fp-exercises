/*

Takes a multidimensional array and converts it to a one-dimensional array.
The new array should contain all elements of the multidimensional array.

Hint: Use Array.isArray to check if something is an array

*/

import { each } from '.';

export default function flatten(nestedArray) {
  const flattened = [];

  if (!Array.isArray(nestedArray)) {
    throw new Error('must provide an array');
  }

  function flat(array) {
    each(array, val => {
      if (Array.isArray(val)) {
        flat(val);
      } else {
        flattened.push(val);
      }
    });
  }

  flat(nestedArray);

  return flattened;
}
