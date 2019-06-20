/*

Returns the elements of the given list (or object with a slice method)
from fromIndex (inclusive) to toIndex (exclusive).  If index provided is
negative, position from the right of the list.

Note: Some functions such as this one which take a list can work on either
an Array or a String

*/

import { min, max, join } from '.';

export default function slice(list, fromIndex, toIndex) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('list must be either an array or string');
  }
  if (typeof fromIndex !== 'number' || typeof toIndex !== 'number') {
    throw new Error('provided indexes must be numbers');
  }
  const { length } = list;

  if (fromIndex < 0) {
    fromIndex += length;
  }

  fromIndex = max(fromIndex, 0);

  if (toIndex < 0) {
    toIndex += length;
  }

  toIndex = min(toIndex, length);

  const newArray = [];

  for (let i = fromIndex; i < toIndex; i++) {
    newArray.push(list[i]);
  }

  if (typeof list === 'string') {
    return join(newArray, '');
  }

  return newArray;
}
