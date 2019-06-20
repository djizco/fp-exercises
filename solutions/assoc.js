/*

Assocates a property to an object.

Note: do not mutate the original object.

*/

import { merge } from '.';

export default function assoc(object, key, value) {
  if (typeof key !== 'string' || key === '') {
    throw new Error('must provide a valid key');
  }
  return merge(object, { [key]: value });
}
