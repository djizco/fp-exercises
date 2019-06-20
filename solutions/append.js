/*

Returns an array containing the contents of the given list, followed by the given element.

*/

import { each } from '.';

export default function append(list, item) {
  if (typeof list === 'object' && !Array.isArray(list)) {
    throw new Error('does not work on objects');
  }
  const newList = [];

  each(list, val => newList.push(val));
  newList.push(item);

  return newList;
}
