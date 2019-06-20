/*

Reduces an array or string to a single value by repetitively calling
an iterator function for each item. accumulator should be
the return value of the previous iterator call.

Iterator function has signature: (accumulator, value, [index], [array]) => nextValue

You can pass in a starting value for the accumulator as the third argument
to reduce. If no starting value is passed, the first element is used as
the accumulator, and is never passed to the iterator. In other words, in
the case where a starting value is not passed, the iterator is not invoked
until the second element, with the first element as it's second argument.

Example:

reduce([1, 2, 3], (total, number) => {
  return total + number;
}, 0); // => 6

*/

import { each } from '.';

export default function reduce(list, iterator, accumulator) {
  // Your code here
}
