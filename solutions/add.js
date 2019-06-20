/*

A simple function which adds two numbers.

*/

export default function add(n, m) {
  if (typeof n !== 'number' || typeof m !== 'number') {
    throw new Error('must provide two numbers as arguments');
  }
  return n + m;
}
