/*

Produce a duplicate-free version of the array.

Hint: There is an opportunity here to reuse a previous function

*/

import { each, includes } from '.';

export default function uniq(array) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }
  const uniqueArray = [];

  each(array, val => {
    if (!includes(uniqueArray, val)) {
      uniqueArray.push(val);
    }
  });

  return uniqueArray;
}
