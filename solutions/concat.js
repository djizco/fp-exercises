/*

Returns the result of concatenating the given lists.

Note: both arguments should be of the same type (array or string).

*/

import { each } from '.';

export default function concat(listA, listB) {
  if (Array.isArray(listA) && Array.isArray(listB)) {
    const newArray = [];

    each(listA, val => newArray.push(val));
    each(listB, val => newArray.push(val));

    return newArray;
  }
  if (typeof listA === 'string' && typeof listB === 'string') {
    let newString = '';

    each(listA, val => { newString += val; });
    each(listB, val => { newString += val; });

    return newString;
  }

  throw new Error('must provide two lists of the same type');
}
