/*

Zips together two or more arrays. Returns a new list
by pairing up equally-positioned items from each lists.

*/

import { each } from '.';

export default function zip(...arrays) {
  const zipped = [];
  let len = 0;

  if (arrays.length < 2) {
    throw new Error('must provide at least two arrays');
  }

  each(arrays, arr => {
    if (!Array.isArray(arr)) {
      throw new Error('each argument must be an array');
    }
    if (arr.length > len) {
      len = arr.length;
    }
  });

  for (let i = 0; i < len; i++) {
    zipped[i] = [];

    for (let j = 0; j < arrays.length; j++) {
      zipped[i].push(arrays[j][i]);
    }
  }

  return zipped;
}
