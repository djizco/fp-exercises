import { difference } from '../problems';

xdescribe('difference', () => {
  it('should return the difference between two arrays', () => {
    expect(difference([1, 2, 3], [2, 30, 40])).toEqual([1, 3]);
  });

  it('should return the difference between three arrays', () => {
    expect(difference([1, 2, 3, 4], [2, 30, 40], [1, 11, 111])).toEqual([3, 4]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => difference()).toThrowError();
    expect(() => difference(null)).toThrowError();
    expect(() => difference({})).toThrowError();
    expect(() => difference('123')).toThrowError();
    expect(() => difference(123)).toThrowError();
  });
});
