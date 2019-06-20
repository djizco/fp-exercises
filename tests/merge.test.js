import { merge } from '../problems';

xdescribe('merge', () => {
  it('should merge two objects together', () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('should use properties of the second object when both objects share a property', () => {
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should not mutate the original objects', () => {
    const a = { a: 1 };
    const b = { b: 2 };

    const mergedObject = merge(a, b);

    expect(mergedObject).toEqual({ a: 1, b: 2 });
    expect(a).toEqual({ a: 1 });
    expect(b).toEqual({ b: 2 });
  });

  it('should not use Object.assign()', () => {
    Object.assign = jest.fn();
    merge({}, {});
    expect(Object.assign).not.toHaveBeenCalled();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => merge()).toThrowError();
    expect(() => merge({})).toThrowError();
    expect(() => merge(null, null)).toThrowError();
    expect(() => merge({}, null)).toThrowError();
    expect(() => merge(null, {})).toThrowError();
  });
});
