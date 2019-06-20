/*

Randomizes the order of an array's contents.

Tip: to copy an array we can use our slice() function.

*/

import { each, slice } from '.';

export default function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }

  const shuffled = slice(array, 0, array.length);
  let target;
  let temp;

  each(shuffled, (val, idx) => {
    target = Math.floor(Math.random() * shuffled.length);
    temp = shuffled[idx];
    shuffled[idx] = shuffled[target];
    shuffled[target] = temp;
  });

  return shuffled;
}
