import { concat } from '../problems';

xdescribe('concat', () => {
  it('should concat two strings together', () => {
    expect(concat('', '')).toEqual('');
    expect(concat('a', 'bc')).toEqual('abc');
  });

  it('should concat two arrays together', () => {
    expect(concat([], [])).toEqual([]);
    expect(concat([1], [2, 3])).toEqual([1, 2, 3]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => concat()).toThrowError();
    expect(() => concat(null)).toThrowError();
    expect(() => concat(null, null)).toThrowError();
    expect(() => concat('', null)).toThrowError();
    expect(() => concat([], null)).toThrowError();
    expect(() => concat(null, '')).toThrowError();
    expect(() => concat(null, [])).toThrowError();
  });
});
