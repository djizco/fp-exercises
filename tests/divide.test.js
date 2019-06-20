import { divide } from '../problems';

xdescribe('divide', () => {
  it('should divide two numbers together', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(10, -2)).toBe(-5);
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(0, 5)).toBe(0);
    expect(divide(5, 0)).toBe(Infinity);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => divide()).toThrowError();
    expect(() => divide(null)).toThrowError();
    expect(() => divide(null, null)).toThrowError();
    expect(() => divide(1, null)).toThrowError();
  });
});
