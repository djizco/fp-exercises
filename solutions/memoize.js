/*
Returns a function that, when called, will check if it has already computed
the result for the given argument and return that value instead if possible.

Tip: To check if a property exists on an object, use the method .hasOwnProperty()
*/

export default function memoize(func) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  const memory = {};

  return function(...args) {
    if (!memory.hasOwnProperty(args)) {
      memory[args] = func.apply(this, args);
    }

    return memory[args];
  };
}
