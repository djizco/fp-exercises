/*

Returns a new list with the elements or characters in reverse order.

Note: Must handle arrays and strings.

 */

import { each } from '.';

export default function reverse(list) {
  if (Array.isArray(list)) {
    const newArray = [];

    each(list, val => {
      newArray.unshift(val);
    });

    return newArray;
  }

  if (typeof list === 'string') {
    let newString = '';

    each(list, char => {
      newString = char + newString;
    });

    return newString;
  }

  throw new Error('invalid input');
}
