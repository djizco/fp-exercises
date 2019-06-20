import { all } from '../problems';

const identity = val => val;
const isEven = num => num % 2 === 0;

xdescribe('all', () => {
  it('passes by default for an empty collection', () => {
    expect(all([], identity)).toBe(true);
  });

  it('passes for a collection of all-truthy results', () => {
    expect(all([true, {}, 1], identity)).toBe(true);
  });

  it('fails for a collection of all-falsy results', () => {
    expect(all([null, 0, undefined], identity)).toBe(false);
  });

  it('fails for a collection containing mixed falsy and truthy results', () => {
    expect(all([true, false, 1], identity)).toBe(false);
    expect(all([1, undefined, true], identity)).toBe(false);
  });

  it('should work when provided a collection containing undefined values', () => {
    expect(all([undefined, undefined, undefined], identity)).toBe(false);
  });

  it('should cast the result to a boolean', () => {
    expect(all([1], identity)).toBe(true);
    expect(all([0], identity)).toBe(false);
  });

  it('should handle callbacks that manipulate the input', () => {
    expect(all([0, 10, 28], isEven)).toBe(true);
    expect(all([0, 11, 28], isEven)).toBe(false);
  });

  it('should work when no callback is provided', () => {
    expect(all([true, true, true])).toBe(true);
    expect(all([true, true, false])).toBe(false);
    expect(all([false, false, false])).toBe(false);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => all()).toThrowError();
    expect(() => all(null)).toThrowError();
    expect(() => all('abc')).toThrowError();
    expect(() => all({})).toThrowError();
    expect(() => all([], null)).toThrowError();
  });
});
