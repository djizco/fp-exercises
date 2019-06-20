/*

Splits a list into sub-lists stored in an object, based on the
result of calling a String-returning (key) function on each element,
and grouping the results according to values returned.

 */

import { each } from '.';

export default function groupBy(array, grouper) {
  if (typeof grouper !== 'function') {
    throw new Error('grouper must be a function');
  }
  const object = {};

  each(array, (val) => {
    const key = grouper(val);

    if (!object[key]) {
      object[key] = [];
    }

    object[key].push(val);
  });

  return object;
}
