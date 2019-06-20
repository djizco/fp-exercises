/*

Decrements a value by 1.

*/

import { subtract } from '.';

export default function dec(n) {
  if (typeof n !== 'number') {
    throw new Error('must provide a number');
  }
  return subtract(n, 1);
}
