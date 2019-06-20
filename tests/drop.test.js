import { drop } from '../problems';

xdescribe('drop', () => {
  it('should drop the first n elements of an array', () => {
    expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(drop([1, 2, 3, 4], 5)).toEqual([]);
  });

  it('should work on strings', () => {
    expect(drop('abc', 2)).toBe('c');
    expect(drop('abc', 5)).toBe('');
  });

  it('should return the entire list for negative n', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(drop('abc', -1)).toBe('abc');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => drop()).toThrowError();
    expect(() => drop(null)).toThrowError();
    expect(() => drop([], null)).toThrowError();
    expect(() => drop([], '-1')).toThrowError();
  });
});
