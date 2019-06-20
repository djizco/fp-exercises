/*

Similar to indexOf, determine if the array or object includes a given value.

Note: must work objects as well as lists.

Challenge: Must work on strings like indexOf

*/

import { each, indexOf, equals } from '.';

export default function includes(collection, target) {
  if (collection instanceof Object) {
    let has = false;
    each(collection, val => {
      if (!has && equals(val, target)) {
        has = true;
      }
    });
    return has;
  }
  return indexOf(collection, target) !== -1;
}
