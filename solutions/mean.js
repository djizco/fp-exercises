/*

Returns the mean of the given list of numbers.

*/

import { divide, sum } from '.';

export default function mean(array) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }

  return divide(sum(array), array.length);
}
