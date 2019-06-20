import { takeLast } from '../problems';

xdescribe('takeLast', () => {
  it('should return the last n elements of an array', () => {
    expect(takeLast([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(takeLast([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('should work on strings', () => {
    expect(takeLast('abc', 2)).toBe('bc');
    expect(takeLast('abc', 5)).toBe('abc');
  });

  it('should return the entire list for negative n', () => {
    expect(takeLast([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(takeLast('abc', -1)).toBe('abc');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => takeLast()).toThrowError();
    expect(() => takeLast(null)).toThrowError();
    expect(() => takeLast([], null)).toThrowError();
    expect(() => takeLast([], '-1')).toThrowError();
  });
});
