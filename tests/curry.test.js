import { curry } from '../problems';

xdescribe('curry', () => {
  it('should return a curried function', () => {
    const add = (a, b) => a + b;
    const curriedAdd = curry(add);
    const addThree = curriedAdd(3);

    expect(addThree(4)).toBe(7);
  });

  it('should call the function if all arguments are supplied', () => {
    const add = (a, b) => a + b;
    const curriedAdd = curry(add);
    expect(curriedAdd(3, 4)).toBe(7);
  });

  it('should apply this to the functions context', () => {
    const sayName = function(greeting, punctuation) {
      return `${greeting}${this.name}${punctuation}`;
    };

    const sayNameCurried = curry(sayName);
    const greet = sayNameCurried('Hello, ');

    expect(greet.call({ name: 'John' }, '.')).toBe('Hello, John.');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => curry()).toThrowError();
    expect(() => curry(null)).toThrowError();
    expect(() => curry(true)).toThrowError();
    expect(() => curry('abc')).toThrowError();
    expect(() => curry(1234)).toThrowError();
    expect(() => curry({})).toThrowError();
  });
});
