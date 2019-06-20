/*

Multiplies two numbers.

*/

export default function multiply(n, m) {
  if (typeof n !== 'number' || typeof m !== 'number') {
    throw new Error('must provide two numbers as arguments');
  }
  return n * m;
}
