/*

Returns the median of the given list of numbers.

Note: you will need to use Array.sort();

*/

import { dec, inc, divide, each, mean, slice } from '.';

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;
const half = n => divide(n, 2);

const sort = array => array.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

export default function median(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('must provide a list of numbers');
  }

  each(array, n => {
    if (typeof n !== 'number') {
      throw new Error('must provide a list of numbers');
    }
  });

  const { length } = array;

  if (isOdd(length)) {
    return sort(array)[half(dec(length))];
  }

  if (isEven(length)) {
    return mean(slice(sort(array), dec(half(length)), inc(half(length))));
  }
}
