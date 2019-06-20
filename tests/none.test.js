import { none } from '../problems';

const identity = val => val;
const isOdd = num => num % 2 !== 0;

xdescribe('none', () => {
  it('passes by default for an empty collection', () => {
    expect(none([], identity)).toBe(true);
  });

  it('fails for a collection of truthy results', () => {
    expect(none([true, {}, 1], identity)).toBe(false);
  });

  it('passes for a collection of falsy results', () => {
    expect(none([null, 0, undefined], identity)).toBe(true);
  });

  it('fails for a collection containing mixed falsy and truthy results', () => {
    expect(none([true, false, 1], identity)).toBe(false);
    expect(none([1, undefined, true], identity)).toBe(false);
  });

  it('should work when provided a collection containing undefined values', () => {
    expect(none([undefined, undefined, undefined], identity)).toBe(true);
  });

  it('should cast the result to a boolean', () => {
    expect(none([1], identity)).toBe(false);
    expect(none([0], identity)).toBe(true);
  });

  it('should handle callbacks that manipulate the input', () => {
    expect(none([0, 10, 28], isOdd)).toBe(true);
    expect(none([0, 11, 28], isOdd)).toBe(false);
    expect(none([1, 11, 29], isOdd)).toBe(false);
  });

  it('should work when no callback is provided', () => {
    expect(none([true, true, true])).toBe(false);
    expect(none([true, true, false])).toBe(false);
    expect(none([false, false, false])).toBe(true);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => none()).toThrowError();
    expect(() => none(null)).toThrowError();
    expect(() => none('abc')).toThrowError();
    expect(() => none({})).toThrowError();
    expect(() => none([], null)).toThrowError();
  });
});
