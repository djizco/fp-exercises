import { dec } from '../problems';

xdescribe('dec', () => {
  it('should decrement a number', () => {
    expect(dec(-5)).toBe(-6);
    expect(dec(0)).toBe(-1);
    expect(dec(5)).toBe(4);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => dec()).toThrowError();
    expect(() => dec(null)).toThrowError();
  });
});
