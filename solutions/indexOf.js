/*

Returns the first index at which value can be found in the list,
or -1 if value is not present in the list.

Challenge: Should work on strings, and target can be multiple letters.

*/

import { each, slice, equals, reduce } from '.';

export default function indexOf(list, target) {
  if (target === undefined) {
    throw new Error('must provide a target');
  }

  if (Array.isArray(list)) {
    return reduce(list, (acc, val, i) => {
      if (acc === -1 && equals(val, target)) {
        return i;
      }
      return acc;
    }, -1);
  }

  if (typeof list === 'string' && typeof target === 'string') {
    let index = -1;

    each(list, (letter, i) => {
      if (index === -1 && equals(slice(list, i, i + target.length), target)) {
        index = i;
      }
    });
    return index;
  }
  throw new Error('invalid input');
}
