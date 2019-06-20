/*

Converts an array into a string and inserts the separator between each element.

* Note: Do not use Array.prototype.join

*/

import { dec, reduce } from '.';

const isLast = (array, i) => i === dec(array.length);

export default function join(array, separator) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }
  if (typeof separator !== 'string') {
    throw new Error('separator must be a string');
  }

  return reduce(array, (acc, val, i) => {
    if (typeof val !== 'string' && typeof val !== 'number') {
      throw new Error('must provide an array of strings and numbers');
    }
    const nextVal = acc + val;

    return (!isLast(array, i))
      ? nextVal + separator
      : nextVal;
  }, '');
}
