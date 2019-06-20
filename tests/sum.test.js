import { sum } from '../problems';

xdescribe('sum', () => {
  it('should sum an array of numbers together', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, 2, -3])).toBe(-2);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => sum()).toThrowError();
    expect(() => sum(null)).toThrowError();
    expect(() => sum([])).toThrowError();
    expect(() => sum([1, 2, null])).toThrowError();
  });
});
