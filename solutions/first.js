/*

Returns a list of everything except the last element.

Note: Sometimes called `init`.
Note: like `head() and tail(), first() and last() are complements to eachother.

*/

import { dec, slice } from '.';

export default function first(list) {
  return slice(list, 0, dec(list.length));
}
