/*
Returns a function that can be called at most one time. Subsequent calls
should return the previously returned value.

Note: You need to know a bit about closures and function arguments.

Tip: Arrow functions while a great new feature for callbacks,
do not provide a 'this' to the function body.
*/

export default function once(func) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      result = func.apply(this, args);
      called = true;
    }
    return result;
  };
}
