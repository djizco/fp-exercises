/*

Takes in a function and a list of arguments, returns a
function that takes the remaining arguments.

*/

import { concat } from '.';

export default function partial(func, ...args) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  return function(...remainingArgs) {
    return func.apply(this, concat(args, remainingArgs));
  };
}
