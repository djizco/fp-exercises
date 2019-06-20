import { reverse } from '../problems';

xdescribe('reverse', () => {
  it('should reverse an array', () => {
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('should work on strings', () => {
    expect(reverse('abcde')).toBe('edcba');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => reverse()).toThrowError();
    expect(() => reverse(null)).toThrowError();
    expect(() => reverse({})).toThrowError();
    expect(() => reverse(123)).toThrowError();
  });
});
