import { inc } from '../problems';

xdescribe('inc', () => {
  it('should increment a number', () => {
    expect(inc(-5)).toBe(-4);
    expect(inc(0)).toBe(1);
    expect(inc(5)).toBe(6);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => inc()).toThrowError();
    expect(() => inc(null)).toThrowError();
  });
});
