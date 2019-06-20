/*

The complement to head(), returns a list of everything except the first element.

*/

import { slice } from '.';

export default function tail(list) {
  return slice(list, 1, list.length);
}
