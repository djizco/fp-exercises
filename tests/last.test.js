import { last } from '../problems';

xdescribe('last', () => {
  it('should return the last element in a list', () => {
    expect(last([1, 2, 3])).toEqual(3);
    expect(last('123')).toEqual('3');
  });

  it('should handle empty inputs', () => {
    expect(last([])).not.toBeDefined();
    expect(last('')).not.toBeDefined();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => last()).toThrowError();
    expect(() => last(null)).toThrowError();
    expect(() => last({})).toThrowError();
    expect(() => last(123)).toThrowError();
  });
});
