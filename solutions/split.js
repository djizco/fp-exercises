/*

The reverse of join, splits a string into
an array of strings by the given separator.

* Hint: An empty string as a separator will split
  on every character.

* Note: Do not use String.prototype.split

*/

import { slice } from '.';

export default function split(string, separator) {
  if (typeof string !== 'string') {
    throw new Error('must provide string');
  }

  if (typeof separator !== 'string') {
    throw new Error('separator must be a string');
  }

  const array = [];
  let start = 0;

  for (let i = 1; i <= string.length; i++) {
    if (slice(string, i, i + separator.length) === separator) {
      array.push(slice(string, start, i));
      i += separator.length;
      start = i;
    }
  }

  if (string.length > start) {
    array.push(slice(string, start, string.length));
  }

  return array;
}
