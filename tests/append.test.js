import { append } from '../problems';

xdescribe('append', () => {
  it('should append an item to the end of a list', () => {
    expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });

  it('should work on strings, returning an array with the appended item', () => {
    expect(append('abc', 'd')).toEqual(['a', 'b', 'c', 'd']);
    expect(append('abc', 4)).toEqual(['a', 'b', 'c', 4]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => append()).toThrowError();
    expect(() => append(null)).toThrowError();
    expect(() => append({}, 1)).toThrowError();
    expect(() => append(null, 1)).toThrowError();
  });
});
