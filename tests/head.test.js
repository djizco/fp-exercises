import { head } from '../problems';

xdescribe('head', () => {
  it('should return the first element in a list', () => {
    expect(head([1, 2, 3])).toEqual(1);
    expect(head('123')).toEqual('1');
  });

  it('should handle empty inputs', () => {
    expect(head([])).not.toBeDefined();
    expect(head('')).not.toBeDefined();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => head()).toThrowError();
    expect(() => head(null)).toThrowError();
    expect(() => head({})).toThrowError();
    expect(() => head(123)).toThrowError();
  });
});
