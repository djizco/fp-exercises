/*

Takes two or more arrays and produces and array that contains
every item shared between all the passed-in arrays

*/

import { each, reduce } from '.';

export default function intersection(...arrays) {
  const first = arrays.shift();

  if (!Array.isArray(first)) {
    throw new Error('must provide an array');
  }

  return reduce(arrays, (prev, curr) => {
    if (!Array.isArray(curr)) {
      throw new Error('must provide an array');
    }

    const next = [];

    each(prev, (val1) => {
      each(curr, (val2) => {
        if (val1 === val2) {
          next.push(val1);
        }
      });
    });

    return next;
  }, first);
}
