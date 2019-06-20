import { keys } from '../problems';

xdescribe('keys', () => {
  it('should return a list of keys of the provided object', () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
  });

  it('should work on arrays', () => {
    expect(keys([1, 2, 3])).toEqual(['0', '1', '2']);
  });

  it('should handle empty objects', () => {
    expect(keys({})).toEqual([]);
    expect(keys([])).toEqual([]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => keys()).toThrowError();
    expect(() => keys(null)).toThrowError();
  });
});
