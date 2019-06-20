import { mean } from '../problems';

xdescribe('mean', () => {
  it('should calculate the mean of an array of numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
    expect(mean([5, 4, 3, 2, 1])).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(mean([-1, 0, 1, 2, 3])).toBe(1);
    expect(mean([-3, -2, -1, 0, 1])).toBe(-1);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => mean()).toThrowError();
    expect(() => mean(null)).toThrowError();
    expect(() => mean([])).toThrowError();
    expect(() => mean([1, 2, null])).toThrowError();
  });
});
