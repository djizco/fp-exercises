import { partial } from '../problems';

xdescribe('partial', () => {
  it('should work partially apply a function', () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d;
    const addSix = partial(addFourNumbers, 1, 2, 3);

    expect(addSix()).toBe(NaN);
    expect(addSix(4)).toBe(10);
  });

  it('should return a function even if all arguments provided', () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d;
    const f = partial(addFourNumbers, 1, 2, 3, 4);
    expect(f()).toBe(10);
    expect(f(10)).toBe(10);
  });

  it('should apply this to the functions context', () => {
    const sayName = function(greeting, punctuation) {
      return `${greeting}${this.name}${punctuation}`;
    };

    const greet = partial(sayName, 'Hello, ');
    expect(greet.call({ name: 'John' }, '.')).toBe('Hello, John.');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => partial()).toThrowError();
    expect(() => partial(null)).toThrowError();
    expect(() => partial(true)).toThrowError();
    expect(() => partial('abc')).toThrowError();
    expect(() => partial(1234)).toThrowError();
    expect(() => partial({})).toThrowError();
  });
});
