import { includes } from '../problems';

xdescribe('includes', () => {
  it('should return false if a collection does not contain a user-specified value', () => {
    expect(includes([4, 5, 6], 2)).toBe(false);
  });

  it('should return true if a collection includes a user-specified value', () => {
    expect(includes([4, 5, 6], 5)).toBe(true);
  });

  it('should work on objects', () => {
    expect(includes({ a: 4, b: 5, c: 6 }, 5)).toBe(true);
  });

  xit('should test equality with equals()', () => {
    expect(includes(['1', '2', [1, 2, 3], '4'], [1, 2, 3])).toBe(true);
  });

  xit('should work on strings', () => {
    expect(includes('abcde', '')).toBe(true);
    expect(includes('abcde', 'b')).toBe(true);
    expect(includes('abcde', 'bc')).toBe(true);
    expect(includes('abcde', 'bz')).toBe(false);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => includes()).toThrowError();
    expect(() => includes(null)).toThrowError();
    expect(() => includes(null, 'a')).toThrowError();
  });
});
