import { dropLast } from '../problems';

xdescribe('dropLast', () => {
  it('should drop the last n elements of an array', () => {
    expect(dropLast([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(dropLast([1, 2, 3, 4], 5)).toEqual([]);
  });

  it('should work on strings', () => {
    expect(dropLast('abc', 2)).toBe('a');
    expect(dropLast('abc', 5)).toBe('');
  });

  it('should return the entire list for negative n', () => {
    expect(dropLast([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(dropLast('abc', -1)).toBe('abc');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => dropLast()).toThrowError();
    expect(() => dropLast(null)).toThrowError();
    expect(() => dropLast([], null)).toThrowError();
    expect(() => dropLast([], '-1')).toThrowError();
  });
});
