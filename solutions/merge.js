/*
Merges the properties of two objects together. If both objects
share a property, the value from the second object is used.

Note: This function is sometimes called 'mergeLeft' or 'extend'.

Note: Do not use object.assign()
*/

import { each } from '.';

export default function merge(objA, objB) {
  if (!(objA instanceof Object) || !(objB instanceof Object)) {
    throw new Error('must provide two objects');
  }

  const newObj = {};

  each(objA, (val, key) => { newObj[key] = val; });
  each(objB, (val, key) => { newObj[key] = val; });

  return newObj;
}
