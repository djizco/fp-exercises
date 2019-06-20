/*

Returns a curried equivalent of the provided function.
A curried function can accept some of its arguments and
return a function which takes the remaining arguments.

*/

import { partial } from '.';

export default function curry(func) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  return function(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return partial(func, ...args);
  };
}
