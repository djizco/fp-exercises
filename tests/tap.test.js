import { tap } from '../problems';

xdescribe('tap', () => {
  it('should call the passed in function with supplied object', () => {
    const person = {};
    const setName = (name) => { person.name = name; };

    tap(setName, 'John');
    expect(person.name).toBe('John');
  });

  it('should return the passed in object', () => {
    expect(tap(() => {}, 10)).toBe(10);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => tap()).toThrowError();
    expect(() => tap(null)).toThrowError();
    expect(() => tap(true)).toThrowError();
    expect(() => tap('abc')).toThrowError();
    expect(() => tap(1234)).toThrowError();
    expect(() => tap({})).toThrowError();
  });
});
