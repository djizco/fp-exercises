/*

Performs left-to-right function composition. Each
function passes the return value into the next.
The first (leftmost) function may take multiple arguments,
but the remaining functions must only take a single value,
the value passed in from the previous function.

Note: piping data is a common pattern in functional programming.
It is useful for applying multiple transformations to
a single piece of data.

*/

import { reduce } from '.';

export default function pipe(firstFunc, ...funcs) {
  // Your code here
}
