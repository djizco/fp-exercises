/*

Creates a function that is bound to a context.
In other words all future calls to the function
will use the context for its "this".

Note: Function decorators take in a function and return a enhanced
version of the function that works somewhat differently.

Tip: The standard way to pass all information from one function call
to another function call is with .apply(this, arguments)

Tip: You can get a functions arguments with the spread paramater

*/

export default function bind(func, context) {
  if (typeof func !== 'function') {
    throw new Error('must provide a function');
  }

  return (...args) => func.apply(context, args);
}
