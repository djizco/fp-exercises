/*

Determine whether any of the elements pass a truth test. If no iterator is
provided, provide a default one

TIP: There's a very clever way to reuse all() here.

*/

import { identity, all } from '.';

export default function any(array, predicate = identity) {
  if (typeof predicate !== 'function') {
    throw new Error('predicate must be a function');
  }

  return !all(array, (item) => !predicate(item));
}
