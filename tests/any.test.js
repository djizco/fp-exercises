import { any } from '../problems';

const identity = val => val;
const isEven = n => n % 2 === 0;

xdescribe('any', () => {
  it('should fail by default for an empty collection', () => {
    expect(any([])).toBe(false);
  });

  it('should pass for a collection of all-truthy results', () => {
    expect(any([true, {}, 1], identity)).toBe(true);
  });

  it('should fail for a collection of all-falsy results', () => {
    expect(any([null, 0, undefined], identity)).toBe(false);
  });

  it('should pass for a collection containing mixed falsy and truthy results', () => {
    expect(any([true, false, 1], identity)).toBe(true);
  });

  it('should pass for a set containing one truthy value that is a string', () => {
    expect(any([null, 0, 'yes', false], identity)).toBe(true);
  });

  it('should fail for a set containing no matching values', () => {
    expect(any([1, 11, 29], isEven)).toBe(false);
  });

  it('should pass for a collection containing one matching value', () => {
    expect(any([1, 10, 29], isEven)).toBe(true);
  });

  it('should cast the result to a boolean', () => {
    expect(any([1], identity)).toBe(true);
    expect(any([0], identity)).toBe(false);
  });

  it('should work when no callback is provided', () => {
    expect(any([true, true, true])).toBe(true);
    expect(any([true, true, false])).toBe(true);
    expect(any([false, false, false])).toBe(false);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => any()).toThrowError();
    expect(() => any(null)).toThrowError();
    expect(() => any('abc')).toThrowError();
    expect(() => any({})).toThrowError();
    expect(() => any([], null)).toThrowError();
  });
});
