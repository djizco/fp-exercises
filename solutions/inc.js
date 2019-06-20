/*

Increments a value by 1.

Hint: try reusing add() here.

*/

import { add } from '.';

export default function inc(n) {
  if (typeof n !== 'number') {
    throw new Error('must provide a number');
  }
  return add(n, 1);
}
