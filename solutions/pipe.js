/*

Performs left-to-right function composition. Each
function passes the return value into the next.
The first (leftmost) function may take multiple arguments,
but the remaining functions must only take a single value,
the value passed in from the previous function.

Note: piping data is a common pattern in functional programming.
It is useful for applying multiple transformations to
a single piece of data.

*/

import { reduce } from '.';

export default function pipe(firstFunc, ...funcs) {
  if (typeof firstFunc !== 'function') {
    throw new Error('first argument must be a function');
  }
  return function(...args) {
    return reduce(funcs, (acc, func) => {
      if (typeof func !== 'function') {
        throw new Error('pipe can only accept functions');
      }
      return func(acc);
    }, firstFunc(...args));
  };
}
