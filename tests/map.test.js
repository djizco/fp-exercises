import { map } from '../problems';

const double = num => num * 2;
const identity = val => val;

xdescribe('map', () => {
  it('should apply a function to every value in an array or object', () => {
    expect(map([1, 2, 3], double)).toEqual([2, 4, 6]);
    expect(map({ one: 1, two: 2, three: 3 }, double)).toEqual({ one: 2, two: 4, three: 6 });
  });

  it('should produce a brand new array instead of modifying the input array', () => {
    const numbers = [1, 2, 3];
    expect(map(numbers, identity)).not.toBe(numbers);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => map()).toThrowError();
    expect(() => map(null)).toThrowError();
    expect(() => map(null, () => {})).toThrowError();
    expect(() => map([], null)).toThrowError();
    expect(() => map({}, null)).toThrowError();
  });
});
