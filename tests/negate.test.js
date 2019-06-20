import { negate } from '../problems';

xdescribe('negate', () => {
  it('should negate a number', () => {
    expect(negate(2)).toBe(-2);
    expect(negate(0)).toBe(-0);
    expect(negate(-2)).toBe(2);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => negate()).toThrowError();
    expect(() => negate(null)).toThrowError();
  });
});
