/*

Delays a function for the given number of milliseconds, and then calls
it with the arguments supplied.

Note: The arguments for the original function are passed after the wait
parameter. For example delay(someFunction, 500, 'a', 'b') will
call someFunction('a', 'b') after 500ms

*/

export default function delay(func, wait, ...args) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }
  if (typeof wait !== 'number') {
    throw new Error('must provide wait time in ms');
  }

  return setTimeout(() => func(...args), wait);
}
