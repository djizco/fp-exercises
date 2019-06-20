import { take } from '../problems';

xdescribe('take', () => {
  it('should return the first n elements of an array', () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(take([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('should work on strings', () => {
    expect(take('abc', 2)).toBe('ab');
    expect(take('abc', 5)).toBe('abc');
  });

  it('should return the entire list for negative n', () => {
    expect(take([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(take('abc', -1)).toBe('abc');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => take()).toThrowError();
    expect(() => take(null)).toThrowError();
    expect(() => take([], null)).toThrowError();
    expect(() => take([], '-1')).toThrowError();
  });
});
