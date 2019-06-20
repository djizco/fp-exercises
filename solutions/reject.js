/*

Return all elements of an array that don't pass a truth test.

Hint: see if you can re-use filter() here, without simply
copying code in and modifying it.

*/

import { filter } from '.';

export default function reject(array, predicate) {
  if (!Array.isArray(array)) {
    throw new Error('must prove an array');
  }
  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }

  return filter(array, val => !predicate(val));
}
