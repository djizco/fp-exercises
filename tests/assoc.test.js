import { assoc } from '../problems';

xdescribe('assoc', () => {
  it('should a property to an object', () => {
    expect(assoc({ a: 1 }, 'b', 2)).toEqual({ a: 1, b: 2 });
  });

  it('should override existing properties', () => {
    expect(assoc({ a: 1, b: 2 }, 'b', 4)).toEqual({ a: 1, b: 4 });
  });

  it('should not mutate the original objects', () => {
    const a = {};

    const assocdObject = assoc(a, 'a', 1);

    expect(assocdObject).toEqual({ a: 1 });
    expect(a).toEqual({});
  });

  it('should not use Object.assign()', () => {
    Object.assign = jest.fn();
    assoc({}, 'a', 1);
    expect(Object.assign).not.toHaveBeenCalled();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => assoc()).toThrowError();
    expect(() => assoc({})).toThrowError();
    expect(() => assoc(null, null)).toThrowError();
    expect(() => assoc({}, null)).toThrowError();
    expect(() => assoc(null, {})).toThrowError();
    expect(() => assoc(null, 'key')).toThrowError();
  });
});
