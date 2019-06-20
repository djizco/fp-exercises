import { first } from '../problems';

xdescribe('first', () => {
  it('should return a list of every element except the last', () => {
    expect(first([1, 2, 3])).toEqual([1, 2]);
    expect(first('123')).toEqual('12');
  });

  it('should handle empty inputs', () => {
    expect(first([])).toEqual([]);
    expect(first('')).toEqual('');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => first()).toThrowError();
    expect(() => first(null)).toThrowError();
    expect(() => first({})).toThrowError();
    expect(() => first(123)).toThrowError();
  });
});
