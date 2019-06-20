/*

Multiplies together all the elements of a list.

*/

import { multiply, reduce } from '.';

export default function product(array) {
  return reduce(array, multiply);
}
