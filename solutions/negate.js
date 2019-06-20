/*

Negates a number.

*/

import { multiply } from '.';

export default function negate(n) {
  if (typeof n !== 'number') {
    throw new Error('must provide two numbers as arguments');
  }
  return multiply(n, -1);
}
