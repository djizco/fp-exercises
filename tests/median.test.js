import { median } from '../problems';

xdescribe('median', () => {
  it('should calculate the median of an array of numbers', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([5, 4, 3, 2, 1])).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(median([-1, 0, 1, 2, 3])).toBe(1);
    expect(median([-3, -2, -1, 0, 1])).toBe(-1);
  });

  it('should handle unsorted arrays', () => {
    expect(median([5, 4, 1, 2, 3])).toBe(3);
    expect(median([-1, -2, -3, 0, 1])).toBe(-1);
  });

  it('should handle even length lists', () => {
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => median()).toThrowError();
    expect(() => median(null)).toThrowError();
    expect(() => median([])).toThrowError();
    expect(() => median([1, 2, null])).toThrowError();
  });
});
