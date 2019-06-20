import { bind } from '../problems';

xdescribe('bind', () => {
  it('should produce a function that when called uses the bound context', () => {
    const speak = function(greeting) { return greeting + this.name; };
    const boundSpeak = bind(speak, { name: 'John' });

    expect(boundSpeak('Hi, my name is ')).toBe('Hi, my name is John');
    expect(boundSpeak.call({ name: 'Mary' }, 'Hi, my name is ')).toBe('Hi, my name is John');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => bind()).toThrowError();
    expect(() => bind(null)).toThrowError();
    expect(() => bind(true)).toThrowError();
    expect(() => bind('abc')).toThrowError();
    expect(() => bind(1234)).toThrowError();
    expect(() => bind({})).toThrowError();
  });
});
