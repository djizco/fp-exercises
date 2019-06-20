/*

Returns the first element or the `head` of a list.

Note: head() and tail() are a common pair of functions
in functional programming often seen in recursive loops.

*/

export default function head(list) {
  if (!Array.isArray(list) && typeof list !== 'string') {
    throw new Error('must provide a list');
  }

  return list[0];
}
