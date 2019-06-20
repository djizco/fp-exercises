import { pick } from '../problems';

xdescribe('pick', () => {
  it('should pick a list of properties out of an object', () => {
    expect(pick({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'c'])).toEqual({ b: 2, c: 3 });
    expect(pick({ a: 1, b: 2, c: 3, d: 4 }, [])).toEqual({});
  });

  it('should ignore keys that do not exist', () => {
    expect(pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'z', 'x'])).toEqual({ a: 1 });
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => pick()).toThrowError();
    expect(() => pick(null)).toThrowError();
    expect(() => pick({}, null)).toThrowError();
    expect(() => pick(null, [])).toThrowError();
    expect(() => pick({}, {})).toThrowError();
    expect(() => pick([], {})).toThrowError();
    expect(() => pick({})).toThrowError();
    expect(() => pick(0, null)).toThrowError();
  });
});
