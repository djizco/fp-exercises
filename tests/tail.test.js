import { tail } from '../problems';

xdescribe('tail', () => {
  it('should return every element except the first in a list', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
    expect(tail('123')).toEqual('23');
  });

  it('should handle empty inputs', () => {
    expect(tail([])).toEqual([]);
    expect(tail('')).toEqual('');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => tail()).toThrowError();
    expect(() => tail(null)).toThrowError();
    expect(() => tail({})).toThrowError();
    expect(() => tail(123)).toThrowError();
  });
});
