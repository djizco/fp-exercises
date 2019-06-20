/*

Returns a partial copy of an object containing only the keys specified.
If the key does not exist, the property is ignored.

*/

import { each } from '.';

export default function pick(object, keys) {
  if (!(object instanceof Object) || !Array.isArray(keys)) {
    throw new Error('invalid input');
  }
  const newObj = {};

  each(keys, (key) => {
    const val = object[key];
    if (val) {
      newObj[key] = val;
    }
  });

  return newObj;
}
