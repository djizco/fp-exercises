import { flatten } from '../problems';

xdescribe('flatten', () => {
  it('can flatten nested arrays', () => {
    const nestedArray = [1, [2], [3, [[[4]]]]];

    expect(flatten(nestedArray)).toEqual([1, 2, 3, 4]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => flatten()).toThrowError();
    expect(() => flatten(null)).toThrowError();
    expect(() => flatten({})).toThrowError();
    expect(() => flatten('123')).toThrowError();
    expect(() => flatten(123)).toThrowError();
  });
});
