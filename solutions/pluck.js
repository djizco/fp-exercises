/*
Takes an array of objects and returns and array of the values of
a certain property in it. E.g. take an array of people and return
an array of just their ages.

TIP: map is really handy when you want to transform an array of
values into a new array of values
*/

import { map } from '.';

export default function pluck(array, key) {
  if (!Array.isArray(array)) {
    throw new Error('must provide an array');
  }
  if (typeof key !== 'string' || key === '') {
    throw new Error('must provide a key as a string');
  }
  return map(array, item => {
    if (typeof item !== 'object' || !item) {
      return undefined;
    }
    return item[key];
  });
}
