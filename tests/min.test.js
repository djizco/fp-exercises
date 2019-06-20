import { min } from '../problems';

xdescribe('min', () => {
  it('should return the larger of two arguments', () => {
    expect(min(1, 2)).toBe(1);
    expect(min(2, 1)).toBe(1);
    expect(min('1', '2')).toBe('1');
    expect(min(1, '2')).toBe(1);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => min()).toThrowError();
    expect(() => min(1)).toThrowError();
    expect(() => min(1, null)).toThrowError();
  });
});
