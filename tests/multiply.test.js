import { multiply } from '../problems';

xdescribe('multiply', () => {
  it('should multiply two numbers together', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 5)).toBe(0);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => multiply()).toThrowError();
    expect(() => multiply(null)).toThrowError();
    expect(() => multiply(null, null)).toThrowError();
    expect(() => multiply(1, null)).toThrowError();
    expect(() => multiply(null, 1)).toThrowError();
  });
});
