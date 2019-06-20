import { indexOf } from '../problems';

xdescribe('indexOf', () => {
  it('should find 40 in the list', () => {
    const numbers = [10, 20, 30, 40, 50];

    expect(indexOf(numbers, 40)).toEqual(3);
  });

  it('returns -1 when the target cannot be found not in the list', () => {
    const numbers = [10, 20, 30, 40, 50];

    expect(indexOf(numbers, 35)).toEqual(-1);
  });

  it('returns the first index that the target can be found at when there are multiple matches', () => {
    const numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

    expect(indexOf(numbers, 40)).toEqual(1);
  });

  xit('should test equality with equals()', () => {
    expect(indexOf(['1', '2', [1, 2, 3], '4'], [1, 2, 3])).toBe(2);
  });

  xit('should work on strings', () => {
    expect(indexOf('abcde', '')).toBe(0);
    expect(indexOf('abcde', 'b')).toBe(1);
    expect(indexOf('abcde', 'bc')).toBe(1);
    expect(indexOf('abcde', 'bz')).toBe(-1);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => indexOf()).toThrowError();
    expect(() => indexOf([1, 2, 3])).toThrowError();
    expect(() => indexOf('123')).toThrowError();
    expect(() => indexOf(null, 'a')).toThrowError();
  });
});
