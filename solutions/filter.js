/*

Return all elements of an array that pass a predicate.

Note: A predicate is a function that returns true or false.

Hint: Instead of using a standard `for` loop,
use the 'each' function that you have already implemented.


*/

import { each } from '.';

export default function filter(array, predicate) {
  if (!Array.isArray(array)) {
    throw new Error('must prove an array');
  }
  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }
  const filtered = [];

  each(array, val => {
    if (predicate(val)) {
      filtered.push(val);
    }
  });

  return filtered;
}
