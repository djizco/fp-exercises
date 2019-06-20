import { slice } from '../problems';

xdescribe('slice', () => {
  it('should slice an array from index to index', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
    expect(slice([1, 2, 3, 4], -3, -1)).toEqual([2, 3]);
    expect(slice([1, 2, 3, 4], 1, Infinity)).toEqual([2, 3, 4]);
    expect(slice([1, 2, 3, 4], -Infinity, 2)).toEqual([1, 2]);
    expect(slice([1, 2, 3, 4], -Infinity, Infinity)).toEqual([1, 2, 3, 4]);
  });

  it('should work on strings', () => {
    expect(slice('abcde', 0, 3)).toEqual('abc');
    expect(slice('abcde', 2, Infinity)).toEqual('cde');
  });

  it('should handle inputs outside of range', () => {
    expect(slice([1, 2, 3, 4], 20, 40)).toEqual([]);
    expect(slice([1, 2, 3, 4], 40, 20)).toEqual([]);
    expect(slice([1, 2, 3, 4], -20, -40)).toEqual([]);
    expect(slice([1, 2, 3, 4], -40, -20)).toEqual([]);
    expect(slice([1, 2, 3, 4], Infinity, -Infinity)).toEqual([]);
    expect(slice('abcde', 20, 10)).toBe('');
    expect(slice('abcde', 10, 20)).toBe('');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => slice()).toThrowError();
    expect(() => slice(null)).toThrowError();
    expect(() => slice([], null)).toThrowError();
    expect(() => slice([], 1, null)).toThrowError();
  });
});
