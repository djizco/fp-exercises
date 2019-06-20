/*

Returns a function, that can be called only every
often, determined in ms by the wait duration passed in.

*/

export default function throttle(func, wait) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  if (typeof wait !== 'number') {
    throw new Error('must provide wait in ms');
  }

  let called = false;

  return function(...args) {
    if (!called) {
      called = true;
      setTimeout(() => { called = false; }, wait);
      return func.apply(this, args);
    }
  };
}
