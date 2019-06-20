/*

Runs the given function with the supplied argument, then returns the argument.

*/

export default function tap(func, arg) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  func(arg);
  return arg;
}
