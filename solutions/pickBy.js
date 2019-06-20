/*

Returns a partial copy of an object where only the keys that
pass a predicate are returned.

 */

import { each } from '.';

export default function pickBy(object, predicate) {
  if (!(object instanceof Object)) {
    throw new Error('must provide an object');
  }

  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }

  const newObject = {};

  each(object, (val, key) => {
    if (predicate(key)) {
      newObject[key] = val;
    }
  });

  return newObject;
}
