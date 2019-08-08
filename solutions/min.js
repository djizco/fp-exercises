/*

Returns the smaller of its two arguments.
Works on any combination of strings and numbers.

*/

export default function min(n, m) {
  if (
    (typeof n !== 'number' && typeof n !== 'string')
    || (typeof m !== 'number' && typeof m !== 'string')
  ) {
    throw new Error('must provide either strings or numbers');
  }

  return (n < m) ? n : m;
}
