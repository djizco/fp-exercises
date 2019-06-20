import { join } from '../problems';

xdescribe('join', () => {
  it('should join an array of elements, inserting the separator between each element', () => {
    expect(join(['a', 'b', 'c'], ' ')).toEqual('a b c');
    expect(join([1, 2, 3], ' ')).toEqual('1 2 3');
    expect(join(['a', 2, 'c'], ' ')).toEqual('a 2 c');
  });

  it('should not use Array.join()', () => {
    Array.join = jest.fn();
    join([1, 2, 3], '');
    expect(Array.join).not.toHaveBeenCalled();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => join()).toThrowError();
    expect(() => join(null)).toThrowError();
    expect(() => join([], null)).toThrowError();
    expect(() => join(['a', null], '')).toThrowError();
    expect(() => join(['a', 'b', 'c'])).toThrowError();
  });
});
