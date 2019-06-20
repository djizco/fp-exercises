import { identity } from '../problems';

xdescribe('identity', () => {
  const uniqueObject = {};

  it('should return whatever value is passed into it', () => {
    expect(identity()).toEqual(undefined);
    expect(identity(undefined)).toEqual(undefined);
    expect(identity(null)).toEqual(null);
    expect(identity(1)).toEqual(1);
    expect(identity('string')).toEqual('string');
    expect(identity(false)).toBe(false);
    expect(identity(uniqueObject)).toEqual(uniqueObject);
    expect(identity([])).toEqual([]);
  });
});
